import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ajout-compte',
  standalone: true,
  imports: [ReactiveFormsModule,CommonModule],
  templateUrl: './ajout-compte.component.html',
  styleUrl: './ajout-compte.component.css'
})
export class AjoutCompteComponent {

constructor(private http:HttpClient,private route:Router){

}
public FormProduit=new FormGroup({
  designation:new FormControl("",Validators.required),
  codeProduit:new FormControl("",Validators.required),
  prix:new FormControl(0,Validators.min(10)),
  stock:new FormControl(0,Validators.min(1))
});
saveProdui() {
  return this.http.post("http://localhost:9096/api/v2/produit",this.FormProduit.value).subscribe({
  next:data=>{
    alert("Produit ajoute");
    this.route.navigateByUrl("/liste")

  } ,
  error:err=>{
    console.log(err);
  }
  })
  }
}
