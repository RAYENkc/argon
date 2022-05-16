import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {map} from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http : HttpClient) { }

  getProduct(){
    console.log("xxxxxxxxxxxxxxx")
    return this.http.get<any>("https://fakestoreapi.com/products")
    .pipe(map((res:any)=>{
      console.log("xxxxxxxxxxxxxxx")
      return res;
      
    }))
  }
}
