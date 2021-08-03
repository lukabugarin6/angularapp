import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './tour-of-heroes/in-memory-data.service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductAlertsComponent } from './product-alerts/product-alerts.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { CartComponent } from './cart/cart.component';
import { ShippingComponent } from './shipping/shipping.component';
import { FooterComponent } from './footer/footer.component';
import { SpyDirective } from './spy.directive';
import { TourOfHeroesComponent } from './tour-of-heroes/tour-of-heroes.component';
import { HeroesComponent } from './tour-of-heroes/heroes/heroes.component';
import { HeroDetailComponent } from './tour-of-heroes/hero-detail/hero-detail.component';
import { MessagesComponent } from './tour-of-heroes/messages/messages.component';
import { DashboardComponent } from './tour-of-heroes/dashboard/dashboard.component';
import { HeroSearchComponent } from './tour-of-heroes/hero-search/hero-search.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    ProductAlertsComponent,
    TopBarComponent,
    ProductDetailsComponent,
    CartComponent,
    ShippingComponent,
    FooterComponent,
    SpyDirective,
    TourOfHeroesComponent,
    HeroesComponent,
    HeroDetailComponent,
    MessagesComponent,
    DashboardComponent,
    HeroSearchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false }
    ),

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
