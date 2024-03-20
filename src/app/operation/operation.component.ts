import { Component } from '@angular/core';

@Component({
  selector: 'app-operation',
  standalone: true,
  imports: [],
  templateUrl: './operation.component.html',
  styleUrl: './operation.component.css'
})


export class OperationComponent {
  age:number=0;
  ajoutAge(){
    this.age=this.age+1;
  }
  addition(a:number,b:number){
  return a+b;
 }
 soustraction(a:number,b:number){
  return (a-b);
 }
 multiplication(a:number,b:number){
  return a*b;
 }
}
