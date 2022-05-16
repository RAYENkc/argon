import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ClientService } from '../services/client.service';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.scss']
})
export class ClientComponent implements OnInit {
  isAdmin: any;
  clients: any;

  constructor(private productService: ProductService,private router: Router,private commandService: ClientService) { }

  ngOnInit(): void {
    const role = localStorage.getItem('role');
    if(role != "CLIENT")
      this.isAdmin = true

     this.getCommande()
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

  public getCommande(): void {
    this.commandService.getClient().subscribe({
      next: (response: any) => {
        console.log(response);
        this.clients = response;
        
        },
      error: (error: HttpErrorResponse) => {
          alert(error.message);
        },
      complete: () => {
        console.log('complete');
        }
    });
  }

// delete Client
public removeItem(id : any): void {
  this.commandService.deleteClientn(id).subscribe({
    next: (response: any) => {
      console.log(response);
      alert("Deleted Client ");
      this.getCommande()
      },
    error: (error: HttpErrorResponse) => {
        alert(error.message);
      },
    complete: () => {
      console.log('complete');
      }
  });
}

// block Client
public blockItem(id : any): void {
  this.commandService.bloackClient(id).subscribe({
    next: (response: any) => {
      console.log(response);
      alert("Bloack Client ");
      this.getCommande()
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
