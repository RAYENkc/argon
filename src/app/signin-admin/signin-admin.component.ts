import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ClientService } from '../services/client.service';

@Component({
  selector: 'signin-admin',
  templateUrl: './signin-admin.component.html',
  styleUrls: ['./signin-admin.component.scss']
})
export class SigninAdminComponent implements OnInit {

  constructor(private router: Router,private clientService: ClientService) { }

  ngOnInit(): void {
  }

  public onAddMission(addForm: NgForm): void {
    console.log(addForm.value)
    
  this.clientService.signInAgent(addForm.value).subscribe({
    next: (response:any) => {
      console.log(response);
      if(response.message == "Login Success !!!"){
        localStorage.setItem('my_token', response['token']);
        localStorage.setItem('role', response['role']);
        console.log(response['x-access-token']);
        this.router.navigateByUrl('home');
      }else {
        alert(response.resual);
        const container = document.getElementById('code');
  
      }
//      addForm.reset();
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
