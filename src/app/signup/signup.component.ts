import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {  NgForm } from '@angular/forms';
import { Client } from 'src/mockdata/client';
import { ClientService } from '../services/client.service';
import { FileUploader, FileUploaderOptions, ParsedResponseHeaders } from 'ng2-file-upload';
import { Cloudinary } from '@cloudinary/angular-5.x';
import { Router } from '@angular/router';

@Component({
  selector: 'signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  private hasBaseDropZoneOver: boolean = false;
  private uploader: FileUploader | undefined;
  private title: string | undefined;
  image : any
  imageData: any;
  images: any;
  constructor(private clientService: ClientService,private router: Router,) { }

  ngOnInit(): void {
  }

  upload(event: any){
    //const file = (event.target as HTMLInputElement).files[0]
    if(event.target.files.length >0){
      const file = <File>event.target.files[0]
      this.images = file
    }
    
    const reader = new FileReader()
    reader.onload = () => {
      this.imageData = reader.result as String
    }

    reader.readAsDataURL(this.image)
    console.log(this.imageData )
   
  }

  
  public onAddMission(addForm: NgForm): void {
    
   const fd = new FormData();
    fd.append('file',this.images ,this.images.name)
    fd.append('nom',addForm.value.nom)
    fd.append('prenom',addForm.value.prenom)
    fd.append('email',addForm.value.email)
    fd.append('pass',addForm.value.pass)
    fd.append('cin',addForm.value.cin)
    fd.append('phone',addForm.value.phone)
    

    addForm.value.file = this.images
    console.log(addForm.value.file)
    console.log(addForm.value)
   this.clientService.addClient(fd).subscribe({
      next: (response:any) => {
        console.log(response);
        this.router.navigateByUrl('checkout');
   //  this.getClaim();
     // addForm.reset();
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
