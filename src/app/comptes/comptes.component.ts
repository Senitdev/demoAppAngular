import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MesComptesService } from '../mes-comptes.service';
import { AppstateService } from '../services/appstate.service';
@Component({
  selector: 'app-comptes',
  standalone: true,
  imports: [HttpClientModule,CommonModule],
  templateUrl: './comptes.component.html',
  styleUrl: './comptes.component.css'
})
export class ComptesComponent implements OnInit {

  constructor(private mescomptes:MesComptesService,private route:Router,private appstate:AppstateService){}
  prod :any;
  AlerteStock="Normale";
  ngOnInit():void {
    this.mescomptes.getAllcomptes().subscribe({
      next:data=>{
        this.prod=data;
      },
      error:err=>{
        console.log(err);
      }
    })

  }

  supprimer(prod:any) {
    this.mescomptes.idproduit=prod.id;
   return this.mescomptes.deletProduit().subscribe({
    next:data=>{
      alert("Produit supprimer");
      this.route.navigateByUrl("/liste")
    },
    error:err=>{
      console.log(err);
    }
   })
    }
    public modifier(prod:any) {
      this.appstate.compte=prod;
      this.route.navigateByUrl("/modifier/"+prod.id);
    }
}
