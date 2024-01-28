import { Component } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-restaurant-details-form',
  templateUrl: './restaurant-details-form.component.html',
  styleUrls: ['./restaurant-details-form.component.css']
})
export class RestaurantDetailsFormComponent {
  restaurant = {
    name: '',
    cuisine: '',
    building: '',
    street: '',
    zipcode: '',
    phone: '',
    image:[''],
    email: ''
  };

  constructor(private http: HttpClient) { }

  submitForm() {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });
    this.http.post('http://localhost:8000/api/v1/restaurants', this.restaurant, { headers })
      .subscribe(
        (response) => {
          console.log('Form submitted successfully:', response);
          // Reset the form after successful submission
          this.resetForm();
        },
        (error) => {
          console.error('Error submitting form:', error);
        }
      );
    console.log('Form submitted');
  }

  resetForm() {
    // Reset the form fields
    this.restaurant = {
      name: '',
      cuisine: '',
      building: '',
      street: '',
      zipcode: '',
      phone: '',
      image:[''],
      email: ''
    };
  }
}
