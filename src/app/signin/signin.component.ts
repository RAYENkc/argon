import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRouteSnapshot, Router, RouterStateSnapshot } from '@angular/router';
import { Client } from 'src/mockdata/client';
import { ClientService } from '../services/client.service';

@Component({
  selector: 'signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {

  constructor(private router: Router,private clientService: ClientService) { }


  ngOnInit(): void {
  }

  home(){
    console.log("fff")
    this.router.navigateByUrl('home');
  }
  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    if (localStorage.getItem('access_token')) {
      return true;
    }

    this.router.navigate(['login']);
    return false;
  }
  public onAddMission(addForm: NgForm): void {
    console.log(addForm.value)
    

  this.clientService.signIn(addForm.value).subscribe({
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
