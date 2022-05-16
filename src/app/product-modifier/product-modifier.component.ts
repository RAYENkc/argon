import { Component, ElementRef, Input, NgZone, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { WebGLRenderer } from 'three';
import { ProductConfigurator } from '../3D/ProductConfigurator';
import { ApiService } from '../api.service';
import { CartService } from '../cart.service';
import { ProductConfiguratorService } from '../product-configurator.service';

@Component({
  selector: 'product-modifier',
  templateUrl: './product-modifier.component.html',
  styleUrls: ['./product-modifier.component.scss']
})
export class ProductModifierComponent implements OnInit {
  public productList : any 
  public filterCategory : any
  searchKey:string =""
  testt  =false

  public totalItem : number = 0;
  public searchTerm !: string;

  @Input() cand : any;
  constructor(private cartService : CartService ) { }

  ngOnInit(): void {
    this.cartService.getProducts()
      .subscribe(res=>{
        this.totalItem = res.length;
      })
  }

  addtocart(item: any){
    this.testt
    this.cartService.addtoCart(item);
  }
}
