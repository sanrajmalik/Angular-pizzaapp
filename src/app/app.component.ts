import { Component, OnInit } from '@angular/core';
import { ServiceService } from './service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'pizzeria';
  order: any;
  constructor( public service: ServiceService){

  }

  ngOnInit(): void {
    this.order = this.service.order;
    }
}
