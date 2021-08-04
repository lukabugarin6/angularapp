import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent implements OnInit {
  heroes: Hero[] = [];

  constructor(
    private heroService: HeroService,
    // private messageService: MessageService,
  ) { }

  ngOnInit(): void {
    this.getHeroes();
  }

  /**
   * After we get a response from heroServices getHeroes
   * populate empty heroes array with array from the response
   * @return {void}
   */
  getHeroes(): void {
    this.heroService.getHeroes()
      .subscribe((heroes: Hero[]) => this.heroes = heroes);
  }

  /**
   * Whitespaces are removed from inputs value
   * break if there is no value
   * add hero is called from the hero service
   * we subscribe to it and get added hero from response
   * we add him to the front end array
   * @param {string} name of the hero
   * @return {void}
   */
  add(name: string): void {
    name = name.trim();
    if(!name) { return; }
    this.heroService.addHero( {name} as Hero)
      .subscribe((hero:Hero) => {
        this.heroes.push(hero);
      })
  }

  /**
   * Method receives hero to be deleted
   * hero is found in array of heroes in the front end
   * delete method from injected service is called
   * @param {Hero} hero hero to be deleted
   * @return {void}
   */
  delete(hero: Hero): void {
    this.heroes = this.heroes.filter(h => h !== hero);
    this.heroService.deleteHero(hero.id).subscribe();
  }

}
