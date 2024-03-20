import { Component, Input, computed, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from "../app.component";
@Component({
    selector: 'app-calcule-degre',
    standalone: true,
    templateUrl: './calcule-degre.component.html',
    styleUrl: './calcule-degre.component.css',
    imports: [FormsModule, AppComponent]
})
export class CalculeDegreComponent {
  @Input () message:string='je suis un message';
 celsuis=25;
 fahreint=this.celsuis*1.8+32;
 doubleCelsuis(){
  this.celsuis=this.celsuis*2;
 }
 celsuis2=signal(25);
 fahreint2=computed(()=>this.celsuis2()*1.8+32);
 doubleCelsuis2(){
  this.celsuis2.set(this.celsuis2()*2);
 }
 poids=signal(65);
 age=computed(()=>this.poids()/2);
 changePoid(){
  this.poids.set(this.poids()*1.5);
 }
 imageRempli:string="assets/vertRempli.jpg";
 imgeVide:string="assets/vertVide.jpg";
 imageSelectionne=this.imageRempli;
 diametre:number=15;
 rayon=this.diametre*2;
recalcule(){
}
}
