import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule,CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit {
  constructor(){
  }
  public newLoginForm=new FormGroup({
    login:new FormControl("",[Validators.required,Validators.minLength(6)]),
    password:new FormControl("",[Validators.required,Validators.minLength(6)])
  });
ngOnInit(): void {

}
valider(){
  console.log(this.newLoginForm.value);
}
}
