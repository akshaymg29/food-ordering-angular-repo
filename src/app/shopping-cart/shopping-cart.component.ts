import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CartService } from '../services/cart.service';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

export interface MenuItem {
  productId: string,
  name: string,
  price: number,
  quantity?: number,
  total: number
}

export interface ICart {
  menuItems: [MenuItem],
  subTotal: Number
}

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})

export class ShoppingCartComponent implements OnInit {

  /* cartDetails: ICart = {
    menuItems: [{
      productId: '',
      name: '',
      price: 0,
      quantity :0,
      total:0
    }],
    subTotal : 0
  }; */

  cartDetails: any;

  cartColumns = ['item', 'price', 'quantity', 'subtotal', 'actions'];

  constructor(private dialog: MatDialog, private _cartService: CartService,
    private _authUser: AuthService, private router: Router) { }

  ngOnInit(): void {
    // Initialize cart items from backend or other sources
    // Example:
    /* this.cartItems = [
      { id: 1, name: 'Item 1', price: 10.99, quantity: 2, subtotal: 21.98 },
      { id: 2, name: 'Item 2', price: 5.99, quantity: 1, subtotal: 5.99 }
    ]; */

    this._getCart();
  }

  _getCart(): void {
    this._cartService.getCartItems(this._authUser.getCurrentUser().email).subscribe((data: any) => {
      this.cartDetails = data.data;
      console.log(this.cartDetails);
    });
  }
  _increamentQTY(productId: string, price: number, quantity: number): void {
    let payload = {
      userId: this._authUser.getCurrentUser().email,
      menuItem: {
        productId,
        price,
      },
      quantity,
    };
    this._cartService.increaseQty(payload).subscribe(() => {
      this._getCart();
      if (1 == quantity)
        alert('Quantity Increased');
      else
        alert('Quantity Decreased');
    });
  }
  _emptyCart(): void {
    this._cartService.emptyCart(this._authUser.getCurrentUser().email).subscribe(() => {
      this._getCart();
      alert('Cart Emptied');
      this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
        this.router.navigate(['/cart']);
      });
    });


  }

  _payNow(totalPrice: Number): void {
    // this._cartService.emptyCart(this._authUser.getCurrentUser().email).subscribe(() => {
    const data = { amount: totalPrice };
    // this.router.navigate(['/payment', JSON.stringify(data)]);
    this.router.navigate(['/payment'], { state: data });
    // this.router.navigateByUrl(['/payment'], { state: { amount: this.cartDetails.amount } });
    // this.router.navigateByUrl('/my-url', { state: data });

    // });
  }
  _removeItem(productId: string, price: number, quantity: number): void {
    let payload = {
      userId: this._authUser.getCurrentUser().email,
      menuItem: {
        productId,
        price,
      },
      quantity,
    };
    this._cartService.increaseQty(payload).subscribe(() => {
      this._getCart();
      alert('Product Deleted');
    });
  }
}
