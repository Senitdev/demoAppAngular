import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { EnfantComponent } from "../enfant/enfant.component";
import { Personne } from '../model/personne';

@Component({
    selector: 'app-parent',
    standalone: true,
    templateUrl: './parent.component.html',
    styleUrl: './parent.component.css',
    imports: [CommonModule, EnfantComponent]
})
export class ParentComponent {
listePersone:Personne[]=[
  {
    id:1,prenom:"Pape",nom:"Toure",sexe:"M",solde:1000
  },
  {
    id:2,prenom:"Ndiaga",nom:"Ndiaye",sexe:"M",solde:1500
  },
  {
    id:3,prenom:"Fatou",nom:"Diop",sexe:"F",solde:700
  },
  {
    id:4,prenom:"Bouba",nom:"Niang",sexe:"M",solde:100
  },
  {
    id:5,prenom:"Mamadou",nom:"Niang",sexe:"M",solde:250
  },
  {
    id:6,prenom:"Alassane",nom:"Niang",sexe:"M",solde:375
  },
]
currentUser=this.listePersone[-1];
listeFiltre:Personne[]=[];
details(id: number) {
 this.listeFiltre=this.listePersone.filter((pers=>pers.id==id));
 this.currentUser=this.listeFiltre[0]
  }
  nb:string=""
  addEvent(value:string){
    this.nb=value;
  }
}
