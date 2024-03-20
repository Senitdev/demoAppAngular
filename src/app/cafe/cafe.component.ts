import { CommonModule } from '@angular/common';
import { Component, ElementRef, OnInit, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-cafe',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cafe.component.html',
  styleUrl: './cafe.component.css',

})
export class CafeComponent implements OnInit {
  constructor(private elt:ElementRef,private rnder:Renderer2){}

 ngOnInit() {

 }
 imageValue:String="";


 listeImage=[1,2,3,4,5];
 imgsrc:string="assets/vertRempli.jpg"
 imgVide:string="assets/vertVide.jpg"
 imageActive:string=this.imgsrc;
 nbtache:number=0;
 addcafe(){
 }


modifierTache(id2:number){
 //this.imageActive=this.imgsrc
var doc=document.querySelector('.test_'+id2);
var test=doc?.querySelectorAll('img');
var img=document.createElement("img");
img.src=this.imgVide;
doc?.replaceWith(img);

}
videTache(){
this.imageActive=this.imgVide
}
test(id:number){
const doc=document.querySelector('.test_'+id);
var img=document.createElement("img");
img.src=this.imageActive;
document.body.appendChild(img);
}
}
