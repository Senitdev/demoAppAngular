import { CommonModule } from '@angular/common';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Customers } from '../mesClasse/Customers';
@Component({
  selector: 'app-exo',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './exo.component.html',
  styleUrl: './exo.component.css'
})
export class ExoComponent implements OnInit {
@ViewChild('myInput') input:ElementRef | undefined;

changerValeur(){
  console.log(this.input?.nativeElement.value);
}
ngOnInit(): void {

}
 Mode=new Customers('Pape','toure');
  ListeProduct:any=
[ {
      title:"imprimante",
      price:5000
    },
    {
      title:"Desktop",
      price:2500
    },
    {
      title:"Machine a cafe",
      price:1000
    },
    {
      title:"Iphone",
      price:4000
    },
  ]

}
