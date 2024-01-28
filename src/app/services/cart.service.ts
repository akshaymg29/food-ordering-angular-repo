import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor(private http: HttpClient) { }

  addToCart(payload:any) {
    console.log(payload);
    return this.http.post(`http://localhost:8000/api/v1/cart`, payload);
  }
  getCartItems(id:string) {
    return this.http.get(`http://localhost:8000/api/v1/cart/${id}`);
  }
  increaseQty(payload:any) {
    return this.http.post(`http://localhost:8000/api/v1/cart`, payload);
  }
  emptyCart(id:string) {
    return this.http.delete(`http://localhost:8000/api/v1/cart/${id}`);
  }
}
