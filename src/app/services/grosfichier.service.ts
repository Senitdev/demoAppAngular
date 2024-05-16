import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GrosfichierService {

  constructor(private http:HttpClient) { }
  url:string="http://localhost:9096/api/v1";
  sendUpload(form:any){
return this.http.post(this.url+"/grosfichier",form);
  }
}
