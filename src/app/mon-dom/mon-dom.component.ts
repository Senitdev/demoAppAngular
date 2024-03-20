import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mon-dom',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './mon-dom.component.html',
  styleUrl: './mon-dom.component.css'
})
export class MonDomComponent implements OnInit{

   productList= [
    {
        title: 'Browserstack',
        price: 50
    },
    {
        title: 'Keyboard',
        price: 20
    },
    {
        title: 'Prerender',
        price: 10
    },
    {
      title: 'laptop',
      price: 150
  },
  {
    title: 'imprimante',
    price: 100
}
];
productFilter=this.productList.filter(product=>product.price>=50)
.map(product=>product.title);

 productfilter2=this.productList.filter(product=>product.price<50);

  constructor(){}
  ngOnInit() {
    const user={
      firstname:'Pape',
      lastName:'Toure',
      email:'pape.toure@yahoo.fr',
      telephone:'772237911',
      adresse:'thies'

    };
   const {firstname ,lastName ,...elt}=user;


}
EtatAlerte:string="Vide"
nb:number=0;
incrementer(){
this.nb=this.nb+1;
}
public alertCompteur(): string | undefined{
  if(this.nb>10){
    this.EtatAlerte="Danger";
    return this.EtatAlerte;
  }
  else{
     return this.EtatAlerte="OK"
  }
}
reinitialise(){
  this.nb=0;
}
}
