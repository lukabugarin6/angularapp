import { Injectable } from '@angular/core';
import { Hero } from './hero';
import { HEROES } from './mock-heroes';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { MessageService } from './message.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HeroService {
  // Cause we want response as a JSON data
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  // api simulation url
  private heroesUrl = 'api/heroes';

  constructor(
    private http: HttpClient,
    private messageService: MessageService
  ) { }

    /**
   * Add provided message to the messages array in message service
   * @param {string} message message to be added to message sevice
   * @return {void}
   */
  private log(message: string): void {
    this.messageService.add(`HeroService: ${message}`);
  }

    /**
   * return a callback and handle error nicely
   * logging it in the console
   * adding it to the message service
   * keeping the app running by returning empty result
   * @param {string} operation
   * @param {T} result non declared var
   * @return {void}
   */
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    }
  }

  /**
   * get request is sent with help of HttpCLientModule to the api url
   * pipe added for message and errir handling
   * @return {Hero[]} returns array of heroes
   */
  getHeroes(): Observable<Hero[]> {
    return this.http.get<Hero[]>(this.heroesUrl)
      .pipe(
        tap(_ => this.log('fetched heroes')),
        catchError(this.handleError<Hero[]>('getHeroes', []))
      );

    // OLD CODE FOR RECEIVING HEROES AND MESSAGE HANDLING FOR IT
    // const heroes = of(HEROES);
    // // this.messageService.add('HeroService: fetched heroes');
    // return heroes;
  }

  /**
   * attaches provided id to the api base url
   * sends get request to it
   * after finished handles error and custom message
   * @param {number} id id of hero to be displayed in hero detail component
   * @return {Hero} returns single hero with id provided
   */
  getHero(id: number): Observable<Hero> {
    const url = `${this.heroesUrl}/${id}`;
    return this.http.get<Hero>(url).pipe(
      tap(_ => this.log(`fetched hero id=${id}`)),
      catchError(this.handleError<Hero>(`getHero id=${id}`))
    )
    // For now, assume that a hero with the specified `id` always exists.
    // Error handling will be added in the next step of the tutorial.
    // const hero = HEROES.find(h => h.id === id)!;
    // this.messageService.add(`HeroService: fetched hero id=${id}`);
    // return of(hero);
  }

    /**
   * put request sent with url, hero to be updated and correct headers
   * @param {Hero} hero to be updated
   * @return {any}
   */
  updateHero(hero: Hero): Observable<any> {
    return this.http.put(this.heroesUrl, hero, this.httpOptions).pipe(
      tap(_ => this.log(`updated hero id=${hero.id}`)),
      catchError(this.handleError<any>('updateHero'))
    )
  }

  /**
   * Same as updating hero
   * but now we have a post request
   * @param {Hero} hero to be added
   * @return {Hero} returns added hero
   */
  addHero(hero: Hero): Observable<Hero> {
    return this.http.post<Hero>(this.heroesUrl, hero, this.httpOptions).pipe(
      tap((newHero: Hero) => this.log(`added hero w/ id=${newHero.id}`)),
      catchError(this.handleError<Hero>('addHero'))
    )
  }

  /**
   * delete request sent to the url
   * which contains base url and id of hero to be deleted
   * its sent full url and correct headers
   * @param {number} id of hero to be deleted
   * @return {Hero} returns deleted hero
   */
  deleteHero(id: number): Observable<Hero> {
    const url = `${this.heroesUrl}/${id}`;

    return this.http.delete<Hero>(url, this.httpOptions).pipe(
      tap(_ => this.log(`deleted hero id=${id}`)),
      catchError(this.handleError<Hero>('deleteHero'))
    )
  }

  /**
   * Again as on the front checking if there is value provided
   * if not returns empty array
   * if there is
   * get request is sent to the base url
   * we expect array of heroes as a response
   * only those whose name matches provided query are returned
   * @param {string} term search query from input
   * @return {Hero[]} returns array of heroes that matches the query
   */
  searchHeroes(term: string): Observable<Hero[]> {
    if(!term.trim()) {
      return of([]);
    }

    return this.http.get<Hero[]>(`${this.heroesUrl}/?name=${term}`).pipe(
      tap(x => x.length ?
        this.log(`found heroes matching "${term}"`) :
        this.log(`no heroes matching "${term}"`)),
     catchError(this.handleError<Hero[]>('searchHeroes', []))
    );
  }
}
