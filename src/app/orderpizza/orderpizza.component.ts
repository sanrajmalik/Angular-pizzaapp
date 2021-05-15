import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-orderpizza',
  templateUrl: './orderpizza.component.html',
  styleUrls: ['./orderpizza.component.css']
})
export class OrderpizzaComponent implements OnInit {
  menu = [];
  constructor(public service: ServiceService){}
  ngOnInit(): void {
    this.service.getmenu().subscribe((data) => this.menu = data);
  }
  fetch(a: any): void{
    a.quantity = 1;
    if (!this.service.order.find((data) => data.id === a.id)) {
    this.service.order.push(a);
  }
  }
  fun(item): boolean{
    if (this.service.order.find((data) => data.id === item)) {
      return true;
}
    else {
    return false;
    }
  }
   text(id): string{
    let buttontext;
    if (this.service.order.find((data) => data.id === id)) {
    buttontext = 'Added in cart';
   }
   else {
     buttontext = 'Add to cart';
     }
    return buttontext;
    }
}
