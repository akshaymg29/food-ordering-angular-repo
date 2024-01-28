import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AboutComponent } from './about/about.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { RestaurantListComponent } from './restaurant-list/restaurant-list.component';
import { MenuListComponent } from './menu-list/menu-list.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MatCardModule } from '@angular/material/card';
import { Faker, faker } from '@faker-js/faker';
import { MatDividerModule } from '@angular/material/divider';
import { PaymentComponent } from './payment/payment.component';

//Service
import { PaymentService } from './services/payment.service';
import { MenuListService } from './services/menu-list.service';
import { AuthService } from './services/auth.service';
import { ContactusService } from './services/contactus.service';
import { SignUpService } from './services/signup.service';

//Cutom module for all material imports
import { MatMenuModule } from '@angular/material/menu';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatDialogModule } from "@angular/material/dialog";
import { MatSnackBarModule, MatSnackBarConfig } from '@angular/material/snack-bar';

import { ForbiddenComponent } from './forbidden/forbidden.component';
import { LogoutComponent } from './logout/logout.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { RestaurantDetailsFormComponent } from './restaurant-details-form/restaurant-details-form.component';
import { MenuDetailsFormComponent } from './menu-details-form/menu-details-form.component';




@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    AboutComponent,
    ContactUsComponent,
    LoginComponent,
    SignUpComponent,
    RestaurantListComponent,
    MenuListComponent,
    PaymentComponent,
    ForbiddenComponent,
    LogoutComponent,
    ShoppingCartComponent,
    RestaurantDetailsFormComponent,
    MenuDetailsFormComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NgbModule,
    FormsModule,
    //Reactive Form
    ReactiveFormsModule,
    //For API Calls
    HttpClientModule,
    //Exporting Material UI components
    MatCardModule,
    MatDividerModule,
    MatToolbarModule,
    MatIconModule,
    MatGridListModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
    MatMenuModule,
    MatDialogModule,
    MatSnackBarModule
  ],
  //Adding services to providers
  providers: [PaymentService, AuthService, MenuListService, ContactusService, SignUpService, { provide: MatSnackBarConfig, useValue: { duration: 2500 } } // provide MatSnackBarConfig
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
