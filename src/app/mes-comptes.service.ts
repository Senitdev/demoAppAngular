import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MesComptesService {

  constructor(private http:HttpClient) { }
  url:string="http://localhost:9096/api/v2/";
  getAllcomptes(){
    return this.http.get(this.url+"produits");
  }
  idproduit:any;
  deletProduit(){

    return this.http.delete("http://localhost:9096/api/v2/produit/"+this.idproduit);
  }
  modifierProduit(){
    return this.http.get("http://localhost:9096/api/v2/produit/"+this.idproduit);
  }
  prod:any;
  saveModificationProduit(){
  return this.http.put("http://localhost:9096/api/v2/produit/"+this.prod.id,this.prod);
  }
}
