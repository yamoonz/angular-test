import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { title } from 'process';
import { Products } from './products.module';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit { 
     products:any;
  @Input('name') username: string;
 @Input('title') title: string;
 @Input('price') price:number;
 @Input('rating') rating:number;
 @Input('number-of-sales') numberOfSales:number;
 @Input('last-updated') lastUpdated:string;
@Output() productSelected= new EventEmitter<void>();
  description: any;
  img: any;
  
  constructor() { }

  ngOnInit()  {
    this.products ={
      name:this.username,
       title: this.title,
       description: this.description,
       img: this.img
    };
  }
onSelected(){
  this.productSelected.emit();
}


}
