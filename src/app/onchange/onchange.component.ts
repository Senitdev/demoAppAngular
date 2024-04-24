import { CommonModule } from '@angular/common';
import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Player } from '../model/Player';

@Component({
  selector: 'app-onchange',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './onchange.component.html',
  styleUrl: './onchange.component.css'
})
export class OnchangeComponent  implements OnChanges{

  @Input() value:string="";
  @Input() player!:Player;

   Players=[
    {
      prenom:"Mario"
    },
    {
      prenom:"Jean"
    },
    {
      prenom:"Mario"
    },
    {
      prenom:"Jean Batiste"
    }
   ]
   ngOnChanges(changes: SimpleChanges):void {
    if(this.player.firstChange){
      console.log("Je suis en changement");
    }
}
joueur:string=this.Players[0].prenom;
clicker(prenom:string){
  this.joueur=prenom;
}
}
