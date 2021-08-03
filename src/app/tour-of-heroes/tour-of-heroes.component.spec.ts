import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TourOfHeroesComponent } from './tour-of-heroes.component';

describe('TourOfHeroesComponent', () => {
  let component: TourOfHeroesComponent;
  let fixture: ComponentFixture<TourOfHeroesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TourOfHeroesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TourOfHeroesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
