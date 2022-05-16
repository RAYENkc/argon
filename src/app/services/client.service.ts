import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Client } from 'src/mockdata/client';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class ClientService {
  apiServerUrl:"http://localhost:8090" | undefined;

  constructor(private http : HttpClient, public jwtHelper: JwtHelperService) { }

  public getClient (): Observable<Client[]> {
    return this.http.get<Client[]>("http://localhost:3000/api/client");
  }


  public isAuthenticated(): any {
    const token = localStorage.getItem('my_token');
    // Check whether the token is expired and return
    // true or false
    if(token)
    return !this.jwtHelper.isTokenExpired(token);
  }
  
    public addClient(claim: any): Observable<any> {
      console.log(claim)
      return this.http.post<Client>(`http://localhost:3000/api/client/signup`, claim);
    }

    public signIn(claim: any): Observable<any> {
  
      return this.http.post<{token: string}>(`http://localhost:3000/api/client/signin`, claim);
    }
  
    public updateClient(claim: Client): Observable<Client> {
      console.log(claim)
      return this.http.put<Client>(`http://localhost:8090/edit-ClientAndFeedback`, claim);
    }

    public updateVerfyMail(claim: any): Observable<any> {
      console.log(claim)
      return this.http.put<any>(`http://localhost:3000/api/client/verifmail`, claim );
    }
  
    public deleteClientn(claimId: number): Observable<void> {
      return this.http.delete<void>(`http://localhost:3000/api/client/delete/${claimId}`,);
    }

    logout() {
      localStorage.removeItem('my_token');
    }
  
    estConnecte() {
      let token = localStorage.getItem('my_token');
      return !!token;
    }

    //block
    public bloackClient(claim: any): Observable<any> {
      console.log(claim)
      return this.http.put<any>(`http://localhost:3000/api/client/block/${claim._id}`, claim );
    }

    public signInAgent(claim: any): Observable<any> {
      console.log("claimclaimclaim")
      return this.http.post<any>(`http://localhost:3000/api/agent/signin`, claim);
    }
}
