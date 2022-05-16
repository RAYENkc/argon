import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  isAdmin : any
  constructor(private productService: ProductService,private router: Router, ) { }

  ngOnInit(): void {
    const role = localStorage.getItem('role');
    if(role != "CLIENT")
      this.isAdmin = true
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
