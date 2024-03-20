import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PersonneService } from '../services/personne.service';

@Component({
  selector: 'app-personne',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './personne.component.html',
  styleUrl: './personne.component.css'
})
export class PersonneComponent  implements OnInit{
  constructor(private personneService:PersonneService,private route:Router){}
  personne:any;
  ngOnInit(){
    return this.personneService.getAllPersonne().subscribe({
      next:data=>{
        this.personne=data;
      },
      error:err=>{
        console.log(err.error);
      }
    })
  }
  supprime(personne:any) {
  return this.personneService.deletePersonne(personne.id).subscribe({
    next:data=>{
      alert("Personne supprime avec succès");
    },
    error:err=>{
      console.log(err.error);
    }
  })
    }
    addPersonne(){
     this.route.navigateByUrl("/addpersonne");
    }

}
