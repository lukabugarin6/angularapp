import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { CartComponent } from './cart/cart.component';
import { ShippingComponent } from './shipping/shipping.component';
import { HeroesComponent } from './tour-of-heroes/heroes/heroes.component';
import { DashboardComponent } from './tour-of-heroes/dashboard/dashboard.component';
import { HeroDetailComponent } from './tour-of-heroes/hero-detail/hero-detail.component';

const routes: Routes = [
  { path: '', component: ProductListComponent },
  { path: 'products/:productId', component: ProductDetailsComponent },
  { path: 'cart', component: CartComponent },
  { path: 'shipping', component: ShippingComponent },
  { path: 'heroes',redirectTo: '/heroes/dashboard', pathMatch: 'full' },
  { path: 'heroes/dashboard', component: DashboardComponent },
  { path: 'heroes/list', component: HeroesComponent },
  { path: 'heroes/detail/:id', component: HeroDetailComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
