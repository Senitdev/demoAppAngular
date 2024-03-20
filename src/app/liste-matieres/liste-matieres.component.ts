import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatiereService } from '../services/matiere.service';

@Component({
  selector: 'app-liste-matieres',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './liste-matieres.component.html',
  styleUrl: './liste-matieres.component.css'
})
export class ListeMatieresComponent implements OnInit {
  constructor(private matiere:MatiereService,private route:Router){

  }
  listeMatiere:any;
  ngOnInit(): void {
  this.matiere.getAllMatiere().subscribe({
    next:data=>{
     this.listeMatiere=data;
    },
    error:err=>{
      console.log(err.error.message);
    }
  })
  }
delete(listeMatiere:any){
 this.matiere.supprimeMatiere(listeMatiere.id).subscribe({
  next:data=>{
    alert("supprimer avec succès");
    this.route.navigateByUrl("listeMatiere");
  },
  error:err=>{
    console.log(err);
  }
 })
}
}
