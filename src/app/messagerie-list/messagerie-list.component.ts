import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MessagerieService } from '../services/messagerie.service';

@Component({
  selector: 'app-messagerie-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './messagerie-list.component.html',
  styleUrl: './messagerie-list.component.css'
})
export class MessagerieListComponent implements OnInit {
  listeMessage!:any;
  constructor(private messagerie:MessagerieService,private route:Router){}
  ngOnInit(): void {
  this.messagerie.getAllMessage().subscribe({
    next:data=>{
      this.listeMessage=data;
    },
    error:err=>{
      console.log(err);
    }
  })
  }
  supprimeMessage(id:number){
  return this.messagerie.deleteMessage(id).subscribe({
    next:data=>{
      alert("Supprimer avec succés")
      this.listeMessage=this.listeMessage.filter(((message: { id: number; })=>message.id!=id));
    },
    error:err=>{
    console.log(err);
    }
  })
}

}
