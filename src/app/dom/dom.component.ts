import { Component, ElementRef, OnInit, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-dom',
  standalone: true,
  imports: [],
  templateUrl: './dom.component.html',
  styleUrl: './dom.component.css'
})
export class DomComponent implements OnInit {
  constructor(private el:ElementRef, private rnder:Renderer2){}
 ngOnInit(): void {
const div=this.rnder.createElement('div');
const text=this.rnder.createText("Bonjour les amies de longue date");
this.rnder.appendChild(div,text);
this.rnder.appendChild(this.el.nativeElement,div);
const div2=this.rnder.createElement('div');
const btn=this.rnder.createElement('input');
this.rnder.appendChild(div2,btn);
this.rnder.appendChild(this.el.nativeElement,div2);
this.rnder.setStyle(btn,'backgroundColor','red');

const selectBtn=this.rnder.selectRootElement('button');
const labell=this.rnder.createText("Valider");
this.rnder.appendChild(selectBtn,labell);


}

}
