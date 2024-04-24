import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-comp1',
  standalone: true,
  imports: [ReactiveFormsModule,CommonModule],
  templateUrl: './comp1.component.html',
  styleUrl: './comp1.component.css',
})
export class Comp1Component implements OnInit {

  constructor(private route:Router){

  }
  @Input() log:string="";
  @Output() newItem=new EventEmitter<string>;
  public formLogin=new FormGroup(
  {
    email:new FormControl("",Validators.required)
  }
  )
  ngOnInit(): void {

  }
  situtation=[
    {
      "libelle":"celibataire"
    },
    {
      "libelle":"celibataire sans enfant"
    },
    {
      "libelle":"Mariée"
    },
    {
      "libelle":"Divorcé"
    },
    {
      "libelle":"Veuf"
    },
    {
      "libelle":"Neutre"
    }
  ]
sloger(){
  if(this.formLogin.value.email=="test@gmail.com"){
    this.log=this.formLogin.value.email;
    this.newItem.emit(this.formLogin.value.email);
    this.route.navigateByUrl("/dasbord");
  }else{
    alert("Login incorrect");
  }
}
etape:number=0;
valider(){
if(this.etape<4){
  this.etape=this.etape+1;
  console.log(this.etape)
}

}
}
