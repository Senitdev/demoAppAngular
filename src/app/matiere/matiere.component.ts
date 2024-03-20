import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MatiereService } from '../services/matiere.service';

@Component({
  selector: 'app-matiere',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './matiere.component.html',
  styleUrl: './matiere.component.css'
})
export class MatiereComponent{
   constructor( private matiere:MatiereService,private route:Router){

   }
   matiereForm=new FormGroup({
    libelle:new FormControl("",Validators.required),
    coefficient:new FormControl(0,Validators.min(2))
   })
   libelle:any;
 valideSaisie(){
  this.libelle=this.matiereForm.value;
  return this.matiere.saveMatiere(this.libelle).subscribe({next:data=>{
  alert("Ajouter avec succès");
     this.route.navigateByUrl("/listeMatiere");
  },
  error:err=>{
    alert(err.error.message);
  }

  })
 }
}
