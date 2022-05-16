import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Produit } from 'src/mockdata/produit';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  apiServerUrl:"http://localhost:3000/api/produit/" | undefined;
  cat='all';

  constructor(private http : HttpClient) { }

  public getProduit (): Observable<Produit[]> {
    console.log("ddddddddd")
    return this.http.get<Produit[]>("http://localhost:3000/api/produit/");
  }
  public getProduitImage (): Observable<Produit[]> {
    return this.http.get<Produit[]>("http://localhost:3000/uploads/file_1652020367884_cupcake_cake_skanned_6.png");
  }
  
    public addProduit(claim: any): Observable<any> {
      return this.http.post<Produit>(`http://localhost:3000/api/produit/add`, claim);
    }
  
    public updateProduit(claim: Produit): Observable<Produit> {
      console.log(claim)
      return this.http.put<Produit>(`http://localhost:3000/api/produit/update/${claim._id}`,claim);
    }
  
    public updateProduitImage(claim: any,id: any): Observable<any> {
      console.log(claim)
      return this.http.put<any>(`http://localhost:3000/api/produit/editimage/${id}`,claim);
    }

    public deleteProduit(claimId: number): Observable<void> {
      return this.http.delete<void>(`http://localhost:3000/api/produit/delete/${claimId}`,);
    }

    public logout(claim: any): Observable<any> {
      localStorage.removeItem('my_token');
      console.log("responseresponseresponseresponseresponse");
      return this.http.post<any>(`http://localhost:3000/api/client/logout`, claim);
    }

    public filterage(ev: any) {
       this.cat= ev;
    }
  
}
