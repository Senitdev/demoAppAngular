import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { LoginService } from '../../../services/login.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule,CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit {
  constructor(private serviceLogin:LoginService){
  }
  public newLoginForm=new FormGroup({
    login:new FormControl("",[Validators.required,Validators.minLength(6)]),
    password:new FormControl("",[Validators.required,Validators.minLength(6)])
  });
ngOnInit(): void {

}
user:any;
auh:boolean=false;
valider(){
  this.serviceLogin.seLoger(this.newLoginForm.value).subscribe(
    {
      next:data=>{
        this.user=data;
        localStorage.setItem("token",this.user.token);
        this.auh=true;
      },
      error:err=>(
        console.log(err.error.message)
      )}
  );

    localStorage.removeItem("token");

}
}
