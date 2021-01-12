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
@Output() productSelected= new EventEmitter<void>();
  
  
  constructor() { }

  ngOnInit()  {
    this.products ={
    name:"Cartizlla",
   title: "by Themes in Wooker",
   price:"59$",
   rating:"five stars (22)",
   numberOfSales: "371 sales"

    };
  }
onSelected(){
  this.productSelected.emit();
}


}
