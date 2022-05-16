import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Commande } from 'src/mockdata/commande';
import { Produit } from 'src/mockdata/produit';
import { CommandService } from '../services/command.service';
import * as FileSaver from 'file-saver';
@Component({
  selector: 'commande',
  templateUrl: './commande.component.html',
  styleUrls: ['./commande.component.scss']
})
export class CommandeComponent implements OnInit {
  public commands : Commande[] | undefined;
  public products : any[] | undefined
  public deleteCommand: any
  editMission:  any;
  command: any;
  constructor(private commandService: CommandService,private router: Router,) { }

  ngOnInit(): void {
    this.getCommande()
  }

  public getCommande(): void {
    this.commandService.getCommande().subscribe({
      next: (response: Commande[]) => {
        console.log(response);
        this.commands = response;
        
        },
      error: (error: HttpErrorResponse) => {
          alert(error.message);
        },
      complete: () => {
        console.log('complete');
        }
    });
  }

  public onOpenModal1(mission: Commande, mode: string): void {

    
    const container = document.getElementById('main-container') ;
    const button = document.createElement('button');
    button.type = 'button';
    button.style.display = 'none';
    button.setAttribute('data-toggle', 'modal');
    if (mode === 'add') {
  
      button.setAttribute('data-target', '#addMissionModal');
      console.log(mission)
    }

    if (mode === 'edit') {
      this.editMission = mission
      button.setAttribute('data-target', '#updateMissionModal');
      console.log(mission)
    }

    if (mode === 'affiche') {
      console.log(mission)
      console.log(mission.products)

      button.setAttribute('data-target', '#afficheModal');
      this.products = mission.products
      for (let index = 0; index < this.products!.length; index++) {
        console.log(this.products![index]._id)
      }
 
    }
      
    if (mode === 'delete') {
      console.log(mission)
      console.log(mission.products)
      this.deleteCommand = mission;
      button.setAttribute('data-target', '#deleteCommand')
    }  
    if (mode === 'download') {
      this.command = mission
      console.log(mission)
  
      this.commandService.downloadCommande(mission._id).subscribe({
        next: (response:any ) => {
          console.log(response);
          FileSaver.saveAs(response, "Amadobill.pdf")
          },
        error: (error: HttpErrorResponse) => {
            alert(error.message);
          },
        complete: () => {
          console.log('complete');
          }
      });     
    }
    
    container!.appendChild(button);
    button.click();
  }

  public afficher(command: any): void {
    this.commandService.afficheCommande(command._id).subscribe({
      next: (response: Commande) => {
        console.log(response);
        },
      error: (error: HttpErrorResponse) => {
          alert(error.message);
        },
      complete: () => {
        console.log('complete');
        }
    });
  }


  onDeleteMission(id : any){
    this.commandService.deleteCommande(id).subscribe({
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

    this.getCommande()
  }

  
  public onUpdateMission(mission: any): void {
    console.log( this.editMission);
    console.log(mission);

    this.editMission.products[0].quantite = mission.quantite
    //mission.total = miss
    this.commandService.updateCommande(this.editMission).subscribe({
      next: (response: any) => {
        console.log(response);
        this.getCommande();
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
