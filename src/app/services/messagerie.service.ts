import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MessagerieService {

  constructor(private http:HttpClient) { }
  url="http://localhost:9096/api/v2";
  login:string="test@gmailcom";
  getAllMessage(){
    return this.http.get(this.url+"/message/search/"+this.login);
  }
  addMessage(unMessage:any){
  return this.http.post(this.url+"/message",unMessage);
  }
  deleteMessage(id:number){
    return this.http.delete(this.url+"/message/"+id);
  }
  upload(fichier:any){
            return this.http.post(this.url+"/upload/base",fichier);
  }
}
