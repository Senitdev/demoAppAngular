import { CommonModule } from '@angular/common';
import { Component, computed, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-formation-rjs',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './formation-rjs.component.html',
  styleUrl: './formation-rjs.component.css'
})
export class FormationRjsComponent {
qte=signal(1);
somme=computed(()=>this.qte()*2)
listePersone=[
  {id:1,prenom:"pape",age:25},
  {id:2,prenom:"Salif",age:30},
  {id:5,prenom:"amadou",age:18},
  {id:6,prenom:"Souley",age:19},
  {id:8,prenom:"Moussa",age:13},
  {id:9,prenom:"Fatou",age:10},
  {id:10,prenom:"Anta",age:17},

]
PersonneFiltre=this.listePersone.filter((personne=>personne.age<=18));
triple(){
this.qte.set(this.qte()*3);
}
}
