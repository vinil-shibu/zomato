import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoriesComponent } from './pages/categories/categories.component';
import { CreateOrderComponent } from './pages/create-order/create-order.component';
import { LoginComponent } from './pages/login/login.component';
import { RestaurentItemsComponent } from './pages/restaurent-items/restaurent-items.component';

const routes: Routes = [
  {path:"", component:CategoriesComponent},
  {path:"foodCategory", component:CategoriesComponent},
  {path:"create-order", component:CreateOrderComponent},
  {path:"login", component:LoginComponent},
  {path:"restaurant-items", component:RestaurentItemsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
