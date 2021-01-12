import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Products } from './products.module';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit { 
  @Input ('products') products:any;

  
  
  constructor() { }

  ngOnInit()  {
  
  }
onSelected(){
 
}


}
