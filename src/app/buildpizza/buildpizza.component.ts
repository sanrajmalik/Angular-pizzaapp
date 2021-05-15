import { Component, ElementRef, OnInit, QueryList, ViewChildren } from '@angular/core';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-buildpizza',
  templateUrl: './buildpizza.component.html',
  styleUrls: ['./buildpizza.component.css']
})
export class BuildpizzaComponent implements OnInit {
  @ViewChildren('checkboxes') checkboxes: QueryList<ElementRef>;
  build = [];
  total: any;
  count: any;
  cart = [];
  cart1 = [];
  flag = true;
  custom = this.service.checkbuild;
  constructor(private service: ServiceService) { }
  ngOnInit(): void {
    this.service.getbuild().subscribe((data) => this.build = data);
    this.total = this.service.checkbuild.price;
    this.count = this.service.checkbuild.topping.length;
    this.cart = this.service.order;
    this.cart1 = this.service.ingredientslist;
  }

  add(data, event): void{
    if (event.target.checked){
    this.total = this.total + data.price;
    this.custom.id = data.id;
    console.log(this.total, event.target.checked);
    this.custom.price = this.total;
    this.custom.topping.push({tname: data.tname});
    console.log(this.custom);
    console.log(this.service.checkbuild);
    this.count++;
    }
    else{
      this.total = this.total - data.price;
      this.custom.price = this.total;
      this.custom.topping.splice(this.custom.topping.findIndex(element => element.tname === data.tname), 1);
      console.log(this.custom);
      this.count--;
    }
   }
   buildpizza(): void{
    if (this.count > 0){
    console.log(this.service.ingredientslist);
    this.custom.quantity = 1;
    this.service.ingredientslist.push(this.custom);
    console.log(this.service.ingredientslist);
    }
    else {
    alert('Please Select Something');
    }
  }
   checkedEvnt(): void {
     this.checkboxes.forEach((element) => {
            element.nativeElement.checked = false;
    });
     this.service.checkbuild = {
     name: String,
     topping: [],
     price: 0,
     id: String
   };
     this.custom = this.service.checkbuild;
     this.total = 0;
     this.count = 0;
 }
 check(item): boolean{
  if (this.service.checkbuild.topping.find(data => data.tname === item.tname)){
  return true;
  }
 }
}
