import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Product, products } from '../products';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {
  // product with the type of Product Interface
  product: Product | undefined;

  constructor(
    private route: ActivatedRoute,
    private cartService: CartService
  ) {}

  /**
   * Sending added product to add to cart method in Cart Service
   * @param {Product} product - sent product
   */
  addToCart(product: Product) {
    this.cartService.addToCart(product);
    window.alert('Your product has been added to the cart!');
  }

  /**
   *When component is mounted id is obtained from url through route object, and product is equal to product with the same id as the one in url
   */
  ngOnInit() {
    const routeParams = this.route.snapshot.paramMap;
    const productIdFromRoute = Number(routeParams.get('productId'));

    this.product = products.find(product => product.id === productIdFromRoute);
  }
}
