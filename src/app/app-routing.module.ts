import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BuildpizzaComponent } from './buildpizza/buildpizza.component';
import { CartComponent } from './cart/cart.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { HomeComponent } from './home/home.component';
import { OrderpizzaComponent } from './orderpizza/orderpizza.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'order', component: OrderpizzaComponent},
  {path: 'build', component: BuildpizzaComponent},
  {path: 'cart', component: CartComponent},
  {path: 'checkout', component: CheckoutComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
