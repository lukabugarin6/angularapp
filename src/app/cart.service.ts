import { Product } from './products';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

interface ShippingPrice {
  type: string;
  price: number;
}

@Injectable({
  providedIn: 'root'
})
export class CartService {
  items: Product[] = [];

  constructor(
    private http: HttpClient,
  ) {}


  /**
   * Product is added to array of products
   * @param {Product} product - product to be added
   */
  addToCart(product: Product) {
    this.items.push(product);
  }

  /**
   * Getter for array of items
   * @return {Product[]} products array
   */
  getItems(): Product[] {
    return this.items;
  }

  /**
   * Clears out array of product
   * @return {Product[]} returns empty array, which should be empty
   */
  clearCart() {
    this.items = [];
    return this.items;
  }


  /**
   * Handler for getting data from the /assets/shipping.json
   * Example how to use HttpClient module for retrieving JSON data
   *
   * @return {ShippingPrice[]} Array of Shipping Price object which contains type and price
   */
  getShippingPrices() {
    return this.http.get<ShippingPrice[]>
    ('/assets/shipping.json');
  }

}
