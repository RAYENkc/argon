import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Produit } from 'src/mockdata/produit';
import { ProductService } from '../services/product.service';
declare var test :any;
import { NgForm } from '@angular/forms';

@Component({
  selector: 'product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {
  public produits : Produit[] | undefined
  deleteCommand: any;
  addProduct: any;
  editMission: any;
  images: any| undefined
  imageData: any | undefined
  editImageCommand: any;
  constructor(private productService: ProductService,private router: Router,) { }

  ngOnInit(): void {
    this.getProduit();
    test()
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
/*
  public onAddUser(addForm: NgForm): void {
    document.getElementById('add-user-form').click();
    this.userService.addUser(addForm.value).subscribe({
      next: (response: User) => {
        console.log(response);
        this.getUsers();
        addForm.reset();
      },
      error: (error: HttpErrorResponse) => {
        alert(error.message);
        addForm.reset();
      },
      complete: () => {
        console.log('complete');
      }
    });
  } 
*/
  public onOpenModal1(mission:any, mode: string): void {

    
    const container = document.getElementById('main-container') ;
    const button = document.createElement('button');
    button.type = 'button';
    button.style.display = 'none';
    button.setAttribute('data-toggle', 'modal');
   /* if (mode === 'add') {
  
      button.setAttribute('data-target', '#addMissionModal');
      console.log(mission)
    }
*/
    if (mode === 'add') {
      console.log(mission)
      button.setAttribute('data-target', '#addModal');
     
    }
    if (mode === 'editImage') {
      console.log(mission)
      this.editImageCommand = mission;
      button.setAttribute('data-target', '#editImageModal');
     
    }
      
    if (mode === 'delete') {
      console.log(mission)

      this.deleteCommand = mission;
      button.setAttribute('data-target', '#deleteCommand');

      
    }  

    if (mode === 'edit') {
      console.log(mission)

      this.editMission = mission;
      button.setAttribute('data-target', '#updateMissionModal');

      
    }  
    
    
    
    container!.appendChild(button);
    button.click();
  }

  onDeleteMission(id : any){

    this.productService.deleteProduit(id).subscribe({
      next: (response: any) => {
        console.log(response);

        
        },
      error: (error: HttpErrorResponse) => {
          alert(error.message);
        },
      complete: () => {
        console.log('complete');
        }
    });

    this.getProduit()

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

  public onUpdateMission(id : Produit) : void {
    console.log(id);
    id._id = this.editMission._id
    this.productService.updateProduit(id).subscribe({
      next: (response: Produit) => {
        console.log(response);
        this.getProduit();
      },
      error: (error: HttpErrorResponse) => {
        alert(error.message);
      },
      complete: () => {
        console.log('complete ya a7la rayen ');
      }
    });
  }


  upload(event: any){
    console.log("this.imageData" )
    //const file = (event.target as HTMLInputElement).files[0]
    if(event.target.files.length >0){
      const file = <File>event.target.files[0]
      this.images = file
    }
    
   

   
   
  }

  public onAddMission(addForm: NgForm): void {
    console.log(addForm.value)
 //   document.getElementById('add-mission-form')!.click();
    const fd = new FormData();
    fd.append('file',this.images ,this.images.name)
    fd.append('nom',addForm.value.nom)
    fd.append('categorie',addForm.value.categorie)
    fd.append('description',addForm.value.description)
    fd.append('marque',addForm.value.marque)
    fd.append('quantite',addForm.value.quantite)
    fd.append('prix',addForm.value.prix)
    
  
    this.productService.addProduit(fd).subscribe({
      next: (response: any) => {
        console.log(response);
        this.getProduit();
        addForm.reset();
      },
      error: (error: HttpErrorResponse) => {
        alert(error.message);
        addForm.reset();
      },
      complete: () => {
        console.log('complete');
      }
    });
  } 

  public onUpdateProduit(addForm: NgForm) : void{
    console.log(addForm.value)
    //   document.getElementById('add-mission-form')!.click();
       const fd = new FormData();
       fd.append('file',this.images ,this.images.name)
       fd.append('id',this.editImageCommand._id)
       this.productService.updateProduitImage(fd,this.editImageCommand._id ).subscribe({
        next: (response: any) => {
          console.log(response);
          this.getProduit();
          addForm.reset();
        },
        error: (error: HttpErrorResponse) => {
          alert(error.message);
          addForm.reset();
        },
        complete: () => {
          console.log('complete');
        }
      });
  }
}
