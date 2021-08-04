import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  heroes: Hero[] = [];

  constructor(
    private heroService: HeroService
  ) { }

  // get heroes on mmount
  ngOnInit(): void {
    this.getHeroes();
  }

  /**
   * Setting heroes array to the count of four heroes only (from second to sixth)
   */
  getHeroes(): void {
    this.heroService.getHeroes()
      .subscribe(heroes => this.heroes = heroes.slice(1, 5));
  }
}
