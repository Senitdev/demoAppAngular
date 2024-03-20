import { CommonModule } from '@angular/common';
import { Component, OnInit, Renderer2 } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-mon-cv',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule,FormsModule],
  templateUrl: './mon-cv.component.html',
  styleUrl: './mon-cv.component.css',

})
export class MonCVComponent implements OnInit {
  listePersone:any;
  constructor(private render:Renderer2){}
  ngOnInit(): void {

  }

  nom:string="";
  age:number=0;
  prenom:string="";
  email:string="";
  intitule:string="";
  telephone:string="";
  profil:string="";

monForm=new FormGroup({
  formation:new FormControl("")
}

);



}
