import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MatButton } from '@angular/material/button';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { AjoutCompteComponent } from '../ajout-compte/ajout-compte.component';
import { MesComptesService } from '../mes-comptes.service';
import { AppstateService } from '../services/appstate.service';
@Component({
  selector: 'app-comptes',
  standalone: true,
  imports: [HttpClientModule,CommonModule,MatButton],
  templateUrl: './comptes.component.html',
  styleUrl: './comptes.component.css'
})
export class ComptesComponent implements OnInit {


  constructor(private mescomptes:MesComptesService,private route:Router,private appstate:AppstateService,public dialog:MatDialog){}
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
      this.mescomptes.getAllcomptes().subscribe({
        next:data=>{
          this.prod=data;
        },
        error:err=>{
          console.log(err);
        }
      })
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
    openDialog() {
      const dialogRef=this.dialog.open(AjoutCompteComponent);
      dialogRef.afterClosed().subscribe(result => {
        console.log(`Dialog result: ${result}`);
        if(result=true){
          this.mescomptes.getAllcomptes().subscribe({
            next:data=>{
              this.prod=data;
            },
            error:err=>{
              console.log(err);
            }
          })
        }
      });
      }
}
