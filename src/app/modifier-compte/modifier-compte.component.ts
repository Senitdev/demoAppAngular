import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MesComptesService } from '../mes-comptes.service';
import { AppstateService } from '../services/appstate.service';

@Component({
  selector: 'app-modifier-compte',
  standalone: true,
  imports: [ReactiveFormsModule,CommonModule],
  templateUrl: './modifier-compte.component.html',
  styleUrl: './modifier-compte.component.css'
})
export class ModifierCompteComponent implements OnInit{
 constructor(private urlRoute:ActivatedRoute,private comptes:MesComptesService,private appstate:AppstateService,private route:Router){}
 idProduit=this.urlRoute.snapshot.params['id'];
 ProduitForm=new FormGroup({
  id:new FormControl(this.idProduit),
  codeProduit:new FormControl(this.appstate.compte.codeProduit,Validators.required),
  designation:new FormControl(this.appstate.compte.designation,Validators.required),
  prix:new FormControl(this.appstate.compte.prix,Validators.min(10)),
  stock:new FormControl(this.appstate.compte.stock,Validators.min(1))
 })
 ngOnInit() {
 }
 public saveProduit(){
this.comptes.prod=this.ProduitForm.value;
return this.comptes.saveModificationProduit().subscribe({
  next:data=>{
    alert("Modifier avec succès");
    this.route.navigateByUrl("/liste");
  },
  error:err=>{
    console.log(err);
  }

})
}
}
