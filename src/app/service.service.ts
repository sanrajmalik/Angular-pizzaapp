import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private http: HttpClient) { }
  order = [];
  ingredientslist = [];
  checkbuild: any = {
  topping: [],
  price : 0,
  id: String
  };
  obs = new BehaviorSubject([]);

  getmenu(): Observable<any>{
    return this.http.get('http://localhost:3200/pizza');
  }
  getbuild(): Observable<any>{
    return this.http.get('http://localhost:3200/ingredients');
  }
  menuitem(): any{
   return this.order;
  }

}
