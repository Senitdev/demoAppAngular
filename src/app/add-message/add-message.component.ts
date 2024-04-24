import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MessagerieService } from '../services/messagerie.service';

@Component({
  selector: 'app-add-message',
  standalone: true,
  imports: [ReactiveFormsModule,CommonModule],
  templateUrl: './add-message.component.html',
  styleUrl: './add-message.component.css'
})
export class AddMessageComponent implements OnInit{
  constructor(private message:MessagerieService,private route:Router){}
  public formMessage=new FormGroup({
    objet:new FormControl("",Validators.required),
    contenu:new FormControl("",[Validators.required,Validators.minLength(10)]),
    login:new FormControl("")
  });

ngOnInit(): void {

}
unMessage:any;
saveMessage(){
  this.formMessage.value.login=this.message.login;
 this.unMessage =this.formMessage.value;
  return this.message.addMessage(this.unMessage).subscribe({
    next:data=>{
     alert("Ajouter avec succés");
     this.route.navigateByUrl("/message");
    },
   error:err=>{
    console.log(err)
    }

  })
}
}
