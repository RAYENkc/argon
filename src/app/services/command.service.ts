
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Commande } from 'src/mockdata/commande';
import { HttpClient } from '@angular/common/http';
import { Produit } from 'src/mockdata/produit';


@Injectable({
  providedIn: 'root'
})
export class CommandService {
  apiServerUrl:"http://localhost:8090" | undefined;

  constructor(private http : HttpClient) { }

  public getCommande (): Observable<Commande[]> {
    return this.http.get<Commande[]>("http://localhost:3000/api/commande");
  }
  
  public afficheCommande(id: any): Observable<any> {
    console.log(id)
    return this.http.get<Produit>("http://localhost:3000/api/produit",id);
  }

  
    public addCommande(claim: any): Observable<Commande> {
      return this.http.post<Commande>(`http://localhost:3000/api/commande/add`, claim);
    }
  
    public updateCommande(claim: Commande): Observable<Commande> {
      console.log(claim)
      return this.http.put<Commande>(`http://localhost:3000/api/commande/update/${claim._id}`, claim);
    }
  
    public deleteCommande(claimId: number): Observable<void> {
      console.log(claimId)
      return this.http.delete<void>(`http://localhost:3000/api/commande/delete/${claimId}`,);
    }
    public downloadCommande(claim: any): Observable<any> {
      console.log(claim)
      return this.http.get(`http://localhost:3000/api/bill/download/62795277fc8c2947f1fb0dd0/${claim}`, {
        responseType: 'blob'
      } )

     
    
    }
  

}
