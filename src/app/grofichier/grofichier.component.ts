import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { GrosfichierService } from '../services/grosfichier.service';
@Component({
  selector: 'app-grofichier',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './grofichier.component.html',
  styleUrl: './grofichier.component.css'
})
export class GrofichierComponent implements OnInit{

  constructor(private grosfich:GrosfichierService){}
ngOnInit(): void {

}
public myForm=new FormGroup({
  nom:new FormControl("",Validators.required),
  email:new FormControl("", Validators.required),
  email1:new FormControl(""),
  email2:new FormControl(""),
  subject:new FormControl(""),
  content:new FormControl("")
})
currentFile?:File;
onSelectFile(event:any):void{
  const file:File=event.target.files[0];
   this.currentFile=event.target.files.item(0);
  }
  sendFile(){
      if (this.currentFile) {
        const formData:any= new FormData();
        formData.append('file', this.currentFile);
        formData.append('email',this.myForm.value.email);
        formData.append('to',this.myForm.value.email1);
        formData.append('subject',this.myForm.value.subject);
        formData.append('contenu',this.myForm.value.content)
        this.grosfich.sendUpload(formData).subscribe({
          next:data=>{
            alert("Envoyé avec succés");
          },
          error:err=>{
            console.log(err);
          }
        })
    }
  }
}
