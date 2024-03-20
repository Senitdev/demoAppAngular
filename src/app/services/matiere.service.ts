import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { matier } from '../model/matieres';

@Injectable({
  providedIn: 'root'
})
export class MatiereService {
  url:string="http://localhost:9096/api/v2"
  constructor(private http:HttpClient) { }
  getAllMatiere(){
  return this.http.get(this.url+"/matieres");
  }
  saveMatiere(mat:matier){
    return this.http.post(this.url+"/matiere",mat);
  }
  supprimeMatiere(id:any){
    return this.http.delete(this.url+"/matiere/"+id);
  }
  divison(nbre1:number,nombre2:number){
    return nbre1*nombre2;
  }
}
