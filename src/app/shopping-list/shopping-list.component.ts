import { Component, OnInit } from '@angular/core';
import { Products } from './../products/products.module';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  products=[];

  constructor() { }

  ngOnInit(): void {
  }

}
