import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PersonneService {

  constructor(private http:HttpClient) { }
  url:String="http://localhost:9096/api/v2";
  getAllPersonne(){
   return this.http.get(this.url+"/personnes");
  }
  deletePersonne(id:number){
    return this.http.delete(this.url+"/personne/"+id);
  }
  savePersonne(personne:any){
    return this.http.post(this.url+"/personne",personne);
  }
}
