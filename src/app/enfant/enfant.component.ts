import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Personne } from '../model/personne';

@Component({
  selector: 'app-enfant',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './enfant.component.html',
  styleUrl: './enfant.component.css'
})
export class EnfantComponent {
  @Input() Pers:Personne | null=null;
 @Output() newItem=new EventEmitter<string>;
additem(value:string){
  this.newItem.emit(value)
}
}
