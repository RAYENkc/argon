import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ClientService } from '../services/client.service';
//import * as $ from "jquery";

@Component({
  selector: 'chekout',
  templateUrl: './chekout.component.html',
  styleUrls: ['./chekout.component.scss']
})
export class ChekoutComponent implements OnInit {

  constructor(private claimService: ClientService,private router: Router) { }

  ngOnInit(): void {
  }


  public onAddMission(addForm: NgForm): void {
    console.log(addForm.value)
    this.claimService.updateVerfyMail(addForm.value).subscribe({
      next: (response: any) => {
        console.log(response);
        
        if(response.message == "Verified User !!"){
          this.router.navigateByUrl('home');
        }else {
          alert(response.resual);
          const container = document.getElementById('code');
    
        }
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
