import { Component, OnInit } from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import { MenuListService } from '../services/menu-list.service';
import { Faker, faker } from '@faker-js/faker';
import { ActivatedRoute } from '@angular/router';
import { CartService } from '../services/cart.service';
import { AuthService } from '../services/auth.service';

export interface MenuItem {
  menu_id: string,
  menu_name: string,
  menu_category: string,
  menu_image: string,
  menu_price: number
}

  /* export interface CartRequest {
    menuItem: MenuItem,
    quantity: Number
  } */

@Component({
  selector: 'app-menu-list',
  templateUrl: './menu-list.component.html',
  styleUrls: ['./menu-list.component.css']
})

export class MenuListComponent implements OnInit{

  products: Array<object> = [];
  
  restaurantId : string = '';

  menuList:Array<MenuItem> = [];

  constructor(private http: HttpClient, private _menuList : MenuListService, 
    private router: ActivatedRoute, private _cartService:CartService, private _authService:AuthService) {}

  ngOnInit(): void {
    
    this.restaurantId = this.router.snapshot.params['id'];

    this._getProducts();
  }

  _getProducts(): void {
    this._menuList.getMenuList(this.restaurantId).subscribe((data: any) => {

      for (var i=0; i < data.length; i++) {
        console.log(data[i])
        data[i].menu_image = faker.image.food(150, 100, true);
     }
      console.log(data);
      this.menuList = data;
    },
    (error)=>
    {
      console.log(error+' Server error'); 
    });
  }

  _addItemToCart( productId:string, name:string, price:number, quantity:number): void {
    let payload = {
      userId: this._authService.getCurrentUser().email,
      menuItem : {
        productId,
        name,
        price,
      },
      quantity,
    };
    this._cartService.addToCart(payload).subscribe(() => {
      this._getProducts();
      alert('Product Added');
    },
    (error)=>
    {
      console.log(error+' Server error'); 
    });
  }
}
