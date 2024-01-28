import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { RestaurantListComponent } from './restaurant-list/restaurant-list.component';
import { MenuListComponent } from './menu-list/menu-list.component';
import { PaymentComponent } from './payment/payment.component';
import { RoleAuthGuard } from './auth/role-auth.guard';
import { ForbiddenComponent } from './forbidden/forbidden.component';
import { LogoutComponent } from './logout/logout.component';
import { RestaurantDetailsFormComponent } from './restaurant-details-form/restaurant-details-form.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { MenuDetailsFormComponent } from './menu-details-form/menu-details-form.component';

const routes: Routes = [
  {
    path: '', component: HomeComponent,

  },
  { path: 'forbidden', component: ForbiddenComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contactUs', component: ContactUsComponent },
  { path: 'login', component: LoginComponent },
  { path: 'signUp', component: SignUpComponent },
  {
    path: 'restaurantList', component: RestaurantListComponent, canActivate: [RoleAuthGuard],
    data: { requiredRole: 1000 }
  },
  {
    path: 'restaurantForm', component: RestaurantDetailsFormComponent, canActivate: [RoleAuthGuard],
    data: { requiredRole: 2000 }
  },
  {
    path: 'addMenuItem', component: MenuDetailsFormComponent, canActivate: [RoleAuthGuard],
    data: { requiredRole: 1000 }
  },
  {
    path: 'menuList/:id', component: MenuListComponent, canActivate: [RoleAuthGuard],
    data: { requiredRole: 1000 }
  },
  {
    path: 'payment', component: PaymentComponent, canActivate: [RoleAuthGuard],
    data: { requiredRole: 1000 }
  },
  {
    path: 'cart', component: ShoppingCartComponent, canActivate: [RoleAuthGuard],
    data: { requiredRole: 1000 }
  },
  //use below template for admin routes
  // {
  //   path: 'payment', component: PaymentComponent, canActivate: [RoleAuthGuard],
  //   data: { requiredRole: 2000 }
  // },
  { path: 'logout', component: LogoutComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
