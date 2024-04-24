import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Users } from '../model/Users';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
adresse="http://localhost:9096/api/v2/users/auth";
users!:Users
  constructor(private http:HttpClient) { }
  seLoger(users:any){
     return this.http.post(this.adresse,users);
  }
}
