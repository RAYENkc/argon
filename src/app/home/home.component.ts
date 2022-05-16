import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Produit } from 'src/mockdata/produit';
import { ProductService } from '../services/product.service';

declare var test :any;
@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public produits : Produit[] | undefined;

  isAdmin : any
  constructor(private productService: ProductService,private router: Router, ) { }
  ngOnInit() {
    const role = localStorage.getItem('role');
    if(role != "CLIENT")
      this.isAdmin = true
    console.log(role)
    
    this.getProduit();
    test()
    }
  
  public getProduit(): void {
    this.productService.getProduit().subscribe({
      next: (response: Produit[]) => {
        console.log(response[0]._id);
        this.produits = response;
        
        },
      error: (error: HttpErrorResponse) => {
          alert(error.message);
        },
      complete: () => {
        console.log('complete');
        }
    });
  }

  public logout() : void{
    this.productService.logout("").subscribe({
      next: (response: any) => {
        console.log(response.resual);
        if(response.message == "Logout Success !!!")
        this.router.navigateByUrl('signin');
     //   this.produits = response;
        
        },
      error: (error: HttpErrorResponse) => {
          alert(error.message);
        },
      complete: () => {
        console.log('complete');
        }
    });
  }

}
