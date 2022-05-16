
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Claim } from 'src/mockdata/claim';
@Injectable({
  providedIn: 'root'
})
export class ClaimService {

  apiServerUrl:"http://localhost:8090" | undefined;

  constructor(private http : HttpClient) { }

  public getClaim (): Observable<Claim[]> {
    return this.http.get<Claim[]>("http://localhost:3000/api/claim");
  }
    
  
    public addClaim(claim: Claim): Observable<Claim> {
      return this.http.post<Claim>(`http://localhost:3000/api/claim/add`, claim);
    }
  
    public updateClaim(claim: Claim): Observable<Claim> {
      console.log(claim)
      return this.http.put<Claim>(`http://localhost:3000/api/claim`, claim);
    }
  
    public deleteClaimn(claimId: number): Observable<void> {
      return this.http.delete<void>(`http://localhost:3000/api/claim/delete/${claimId}`,);
    }
}
