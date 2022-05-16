import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Claim } from 'src/mockdata/claim';
import { ClaimService } from '../services/claim.service';

@Component({
  selector: 'reclamation',
  templateUrl: './reclamation.component.html',
  styleUrls: ['./reclamation.component.scss']
})
export class ReclamationComponent implements OnInit {
  claims: any[] | undefined;
  deleteCommand: any;
  addProduct: any;
  deleteMission: any;

  constructor(private claimService: ClaimService,private router: Router,) { }

  ngOnInit(): void {
    this.getClaim()
  }
  public getClaim(): void {
    this.claimService.getClaim().subscribe({
      next: (response: any[]) => {
        console.log(response);
        this.claims = response;
        
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
    button.setAttribute('data-toggle', 'modal');
   /* if (mode === 'add') {
  
      button.setAttribute('data-target', '#addMissionModal');
      console.log(mission)
    }
*/
    if (mode === 'add') {
      console.log(mission)
      this.addProduct = mission;
      button.setAttribute('data-target', '#addMissionModal');
     
    }
      
    if (mode === 'delete') {
      console.log(mission)
      this.deleteMission = mission;
      button.setAttribute('data-target', '#deleteMissionModal');
    }  

  /*  if (mode === 'edit') {
      console.log(mission)

      this.editMission = mission;
      button.setAttribute('data-target', '#updateMissionModal');

      
    } */ 
    
    
    
    container!.appendChild(button);
    button.click();
  }


  onDeleteMission(id : any){
    console.log(id);
    this.claimService.deleteClaimn(id).subscribe({
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

    this.getClaim()

  }
  public onAddMission(addForm: NgForm): void {
    console.log(addForm.value)
    document.getElementById('add-mission-form')!.click();
    this.claimService.addClaim(addForm.value).subscribe({
      next: (response: Claim) => {
        console.log(response);
        this.getClaim();
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
