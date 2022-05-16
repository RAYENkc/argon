import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Produit } from 'src/mockdata/produit';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'offre',
  templateUrl: './offre.component.html',
  styleUrls: ['./offre.component.scss']
})
export class OffreComponent implements OnInit {
  public produits : any[] | undefined;
  commandeProd : any =[]
  constructor(private productService: ProductService,private router: Router,) { }

  ngOnInit(): void {
    this.getProduit()
  }

  public logout() : void{
    this.productService.logout("").subscribe({
      next: (response: any) => {
        console.log(response.resual);
        if(response.resual == "Logout Success !!!")
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
  public getProduit(): void {
    this.productService.getProduit().subscribe({
      next: (response: Produit[]) => {
        console.log(response);
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

  public onOpenModal1(mission:any, mode: string): void {
     
    const container = document.getElementById('main-container') ;
    const button = document.createElement('button');
    button.type = 'button';
    button.style.display = 'none';
    button.setAttribute('data-toggle','modal');
    if (mode === 'add') {

      button.setAttribute('data-target', '#addMissionModal');
     
    }
  }
  public addItem(item: any){
    console.log( item._id)

    this.commandeProd.push(item)
   console.log(this.commandeProd)

  }
  public onAddMission(addForm: NgForm): void {
    console.log(addForm.value)
  
   this.commandeProd.nom = addForm.value.nom
   this.commandeProd.prix = addForm.value.prix
   console.log(this.commandeProd)
  }

}
