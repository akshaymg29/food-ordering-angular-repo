import { Component, OnInit } from '@angular/core';
import { MenuListService } from '../services/menu-list.service';

@Component({
  selector: 'app-menu-details-form',
  templateUrl: './menu-details-form.component.html',
  styleUrls: ['./menu-details-form.component.css']
})
export class MenuDetailsFormComponent implements OnInit{
  menu={
    menu_name:'',
    menu_category:'',
    menu_image:'',
    menu_price:'',
  };
  
  restaurants={
    restaurant_id:0,
    name:'',
    address:{},
    menu_list:{
      menu_name:'',
      menu_category:'',
      menu_image:'',
      menu_price:'',
    }
  }

  selectRestaurant:any;

  constructor(private _addMenu:MenuListService) {

    this._addMenu.getRestaurantList().subscribe((data: any) => {
      this.selectRestaurant = data.results;
    }, (error) => {
      console.log(error);
    });

  }

  ngOnInit(): void {
    
  }

  formSubmit(){

    this._addMenu.addMenuItem(this.restaurants.restaurant_id,this.restaurants).subscribe(
      (data)=>{
        console.log(data);
      },
      (error)=>{
        console.log(error);
        
      }

    )

  }

}
