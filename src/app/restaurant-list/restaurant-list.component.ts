import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router'; 

interface AddressSchema{
  building: String,
  street: String,
  zipcode: String
}

interface ReviewSchema {
  date: Date,
  score: Number,
  review: String
}

interface MenuSchema {
  menu_id: Number,
  menu_name: String,
  menu_category: String,
  menu_image: String,
}
interface Restaurant{
  _id: string,
  restaurant_id : String,
  name: String,
  cuisine: String,
  address: AddressSchema,
  reviews: [ReviewSchema],
  image: [String],
  menu_list: [MenuSchema]
}
@Component({
  selector: 'app-restaurant-list',
  templateUrl: './restaurant-list.component.html',
  styleUrls: ['./restaurant-list.component.css']
})
export class RestaurantListComponent {
  restaurants: Restaurant[] = [
   
  ];

  searchTerm: string = '';
  
  constructor(private http: HttpClient, private router: Router) { }

  ngOnInit(): void {
    this.http.get('http://localhost:8000/api/v1/restaurants').subscribe((response:any) => {
      const results = response.results;
      console.log(results)
      this.restaurants = results;
    });
  }
  get filteredRestaurants(): Restaurant[] {
    return this.restaurants.filter((restaurant: Restaurant) =>
      restaurant.name.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
  }
  
  onCardClick(restaurant: Restaurant): void {
    console.log('Restaurant clicked:', restaurant);
    // do something with the clicked restaurant
    this.router.navigate(['/menuList', restaurant._id]); 
  }
}
