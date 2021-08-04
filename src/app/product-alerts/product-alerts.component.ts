import { Component, OnInit } from '@angular/core';
import { Input, Output, EventEmitter } from '@angular/core';
import { Product } from '../products';

@Component({
  selector: 'app-product-alerts',
  templateUrl: './product-alerts.component.html',
  styleUrls: ['./product-alerts.component.scss']
})
export class ProductAlertsComponent implements OnInit {
  // Receiving props from parent
  @Input() product!: Product;
  // Sending event to parent
  @Output() notify = new EventEmitter();
  constructor() {}

  ngOnInit() {}
}
