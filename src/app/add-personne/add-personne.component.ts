import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { PersonneService } from '../services/personne.service';

@Component({
  selector: 'app-add-personne',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './add-personne.component.html',
  styleUrl: './add-personne.component.css'
})
export class AddPersonneComponent {
  constructor(private personneService:PersonneService,private route:Router){
  }
  public PersonneForm=new FormGroup({
    prenom:new FormControl("", Validators.required),
    nom:new FormControl("",Validators.required),
    adresse:new FormControl("",Validators.required),
    email:new FormControl("",Validators.required),
    telephone:new FormControl(""),
  })
  ajouter(personne:any){
    personne=this.PersonneForm.value;
    return this.personneService.savePersonne(personne).subscribe({
      next:data=>{
        alert("Ajouter avec succés");
        this.route.navigateByUrl("personne");
      },
      error:err=>{
        console.log(err.error);
      }
    })
  }

}
