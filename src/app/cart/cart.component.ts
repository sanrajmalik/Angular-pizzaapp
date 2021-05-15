import { AfterContentChecked, Component, OnInit } from '@angular/core';
import { NumberValueAccessor } from '@angular/forms';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit, AfterContentChecked {
  cart = [];
  cart1 = [];
  total: number;
  total1: number;
  total2: number;
  quantity = 1;

  constructor(private service: ServiceService) { }

  ngOnInit(): void {
    this.cart = this.service.order;
    this.cart1 = this.service.ingredientslist;
    console.log(this.cart);
    console.log(this.cart1);

  }
  inc(id): void {
    const index = this.cart.findIndex((element0) => element0.id === id);
    this.service.order[index].quantity++;
  }
  dec(id): void{
   const index = this.cart.findIndex((element1) => element1.id === id);
   if (this.cart[index].quantity > 1) {
    this.service.order[index].quantity--;
   }
   else{
    this.service.order.splice(index, 1);
    }
  }
  ngAfterContentChecked(): void {
    this.total2 = this.service.order.reduce((acc, element) =>
    acc = acc + (element.price * element.quantity), 0);
    this.total1 = this.service.ingredientslist.reduce((acc, element) =>
    acc = acc + (element.price * element.quantity), 0);
    this.total = this.total1 + this.total2;
  }
  checkout(): void{
    this.service.order.splice(0);
    this.service.ingredientslist.splice(0);
  }
  delete(id): void{
    const index = this.cart.findIndex(( item) => item.id === id);
    this.service.order.splice(index, 1);
  }
  deletein(id): void{
    const index = this.cart1.findIndex(( item) => item.id === id);
    this.service.ingredientslist.splice(index, 1);    }
}
