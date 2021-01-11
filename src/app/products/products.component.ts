import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { title } from 'process';
import { Products } from './products.module';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
 @Input('title') title: string;
 @Input('products') products:any;
@Output() productSelected= new EventEmitter<void>();
  
  constructor() { }

  ngOnInit()  {
    this.products ={
       title: ' A Red Headphone',
       description: 'this is a simplt test',
       img: 'https://pcbonlineshop.com/var/photo/product/2000x4000/4/176/4.jpg',
    };
  }
onSelected(){
  this.productSelected.emit();
}


}
