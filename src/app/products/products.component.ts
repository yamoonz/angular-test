import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Products } from './products.module';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
 // This property is bound using its original name.
 @Input() title: string;
 @Input() Product:any;
          
 // this property value is bound to a different property name
 // when this component is instantiated in a template.
@Output() productSelected= new EventEmitter<void>();
  
  constructor() { }

  ngOnInit()  {
    this.Product ={
       title: ' A Red Headphone',
       description: 'this is a simplt test',
       img: 'https://pcbonlineshop.com/var/photo/product/2000x4000/4/176/4.jpg'),
    };
  }
onSelected(){
  this.productSelected.emit();
}


}
