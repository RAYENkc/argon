import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from '../cart.service';
import { CommandService } from '../services/command.service';

@Component({
  selector: 'cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  public products : any = [];
  public grandTotal !: number;
  totalCommand = 0
  produ = {
    "_id" : "",
    "quantity" : ""
 }

 commandeProd : any =[]
  constructor(private cartService : CartService, private commandService: CommandService,private router: Router,) { }

  ngOnInit(): void {
    this.cartService.getProducts()
    .subscribe(res=>{
      this.products = res;
      this.grandTotal = this.cartService.getTotalPrice();
    })
  }

  removeItem(item: any){
    this.cartService.removeCartItem(item);
  }
  emptycart(){
    this.cartService.removeAllCart();
  }

  public addItem(item: any){
    console.log( item._id)
     console.log(this.totalCommand)
   console.log(this.commandeProd)
    this.totalCommand += item.prix * item.quantite
    this.commandeProd.push(item)

   console.log(this.totalCommand)
   console.log(this.commandeProd)

  }

  public onAddCommande(): void {
    let value ={
      "total" : this.totalCommand,
      "id_client" : "6277e1ba977daca7a3f0451b",
      "status" : "En Attente",
      "products" : this.commandeProd
      }
    console.log("valuevaluevaluevaluevalue")
    console.log(value);
  this.commandService.addCommande(value).subscribe({
    
      next: (response:any) => {
        console.log(response);
     
  //      addForm.reset();
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
