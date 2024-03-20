import { Component, Signal, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
type UserType={
  readonly id:number;
  name:string;
  isActive:boolean;
  additionnelInfo:string;
  status?:'active'|'desactive';

};
type Persone={
prenom:string;
nom:string;
adresse:string;
};
@Component({
  selector: 'app-formation',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './formation.component.html',
  styleUrl: './formation.component.css'
})

export class FormationComponent {

users:Signal<UserType[]>=signal([
{id:1,name:'Alice',isActive:true,additionnelInfo:'Others info',status:'active'},
{id:2,name:'Gérom',isActive:false,additionnelInfo:'nothing',status:'desactive'},
{id:3,name:'Ibrahim',isActive:true,additionnelInfo:'right',status:'active'},
{id:4,name:'Mouhamed',isActive:false,additionnelInfo:'No fare round',status:'desactive'},
]);
personnes:Signal<Persone[]>=signal([
  {prenom:'Pape',nom:'toure',adresse:'thies'},
  {prenom:'ansou',nom:'diop',adresse:'touba'},
  {prenom:'Ablaye',nom:'Mbaye',adresse:'Dakar'},
]);
compteur:number=0;
incrementer() {
   this.compteur=this.compteur+1;
  }
}
