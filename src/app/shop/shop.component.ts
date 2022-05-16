import { Component, ElementRef, EventEmitter, Injectable, Input, NgZone, OnInit, Output, ViewChild } from '@angular/core';
import { ProductItem } from '../3D/models/ProductItem/ProductItem';
import { ProductConfiguratorService } from '../product-configurator.service';
import { createFlowerPot, createRose, createWuffels } from "../../mockdata/UnrealisticItems";
import { ProductConfigurator } from '../3D/ProductConfigurator';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductChanger } from '../3D/ProductChanger';
import { ProductConfigurationEvent } from '../product-configurator-events';
import { Color, DirectionalLight, Light, PerspectiveCamera, Scene, WebGLRenderer } from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { MaterialColorChanger } from '../3D/MaterialAnimators/MaterialColorChanger';
import { MaterialTextureChanger } from '../3D/MaterialAnimators/MaterialTextureChanger';
import { SelectedProductMeshIntersector } from '../3D/SelectedProductMeshIntersector';
import { PointerEventHandler } from '../3D/PointerEventHandler';
import { SelectedProductHighlighter } from '../3D/SelectedProductHighlighter';
import { ApiService } from '../api.service';
import { CartService } from '../cart.service';
import { ProductService } from '../services/product.service';
import { Produit } from 'src/mockdata/produit';
import { HttpErrorResponse } from '@angular/common/http';
import { CommandService } from '../services/command.service';
import { NgForm } from '@angular/forms';
declare var test :any;

@Component({
  selector: 'shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.scss']
})
@Injectable({
  providedIn: "root"
})


export class ShopComponent implements OnInit {
  public produits : Produit[] | undefined;
  public produitsCat : Produit[] | undefined
  @Output() msgToCv = new EventEmitter<any>();
  public productList : any 
  public filterCategory : any
  searchKey:string =""
   testt  =false

  public totalItem : number = 0;
  public searchTerm !: string;


  

  cheesecaketest = false
  gateautest = false 
  magtest = false
  assiettetest = false
  chapeautest = false 
  piecetest = false
  boxtest = false
   id = 0;
   copie: any;

  public items: ProductItem[] = [];
  @Input()
  public item!: ProductItem;
  cat='all';
  constructor(private api : ApiService,private cartService : CartService, private productService: ProductService, private router: Router,) { 
   }
  
  ngOnInit(): void {
    test()
    this.getProduit()
  }


  public getProduit(): void {
    this.productService.getProduit().subscribe({
      next: (response: Produit[]) => {
        console.log(response);
        this.produits = response;

        for(let i=0;i<this.produits.length;i++){
          this.produits[i]['quantite']='0'
        }
        this.copie=this.produits
        this.produits.forEach((a:any) => {
          Object.assign(a,{quantity:1, total: a.prix});
        })
     
        },
      error: (error: HttpErrorResponse) => {
          alert(error.message);
        },
      complete: () => {
        console.log('complete');
        }
    });
  }

 
  sendToCv(myCandidat: any | undefined) {
    this.msgToCv.emit(myCandidat);
  }

  catagory(cat:any){
    this.cat=cat;
    this.produits =[]
    if(this.produits)
    for(let i=0;i<this.copie.length;i++){
       if(this.copie[i]['categorie'] == cat ){
          this.produits.push(this.copie[i])
       }
    }
    if('all' == cat ){
      this.produits=this.copie
   }

  }


  addtocart(item: any){
    console.log("addcarttttt")
    console.log(item)

    this.testt=true
    this.cartService.addtoCart(item);
  }

  
}
