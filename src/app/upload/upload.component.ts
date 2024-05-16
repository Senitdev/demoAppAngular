import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { File } from 'buffer';
import { Observable } from 'rxjs';
import { FileUploadService } from '../services/file-upload.service';

@Component({
  selector: 'app-upload',
  standalone: true,
  imports: [ReactiveFormsModule,CommonModule],
  templateUrl: './upload.component.html',
  styleUrl: './upload.component.css'
})
export class UploadComponent implements OnInit {

constructor(private uploadService:FileUploadService,private http:HttpClient){
}
listeImage:any;
urlLoad:string='http://localhost:9096/api/v2/load/'
ngOnInit(): void {
   this.uploadService.getFiles().subscribe({
    next:value=>{
     this.listeImage=value;
    },
    error:err=>{
      console.log(err);
    }
   }
  )

}


currentFile?:File;
message = '';
fileInfos?:Observable<any>;
onSelectFile(event:any):void{
  const file:File=event.target.files[0];
   this.currentFile=event.target.files.item(0);
}


upload(){
  if (this.currentFile) {
    const formData:any= new FormData();
    formData.append('file', this.currentFile);
     this.http.post("http://localhost:9096/api/v2/upload/base",formData).subscribe({
      next:data=>{
        alert("Ok");
        this.uploadService.getFiles().subscribe({
          next:value=>{
           this.listeImage=value;
           console.log(this.listeImage);
          }
        })
      },
      error:err=>{
        console.log(err);
      }
     })
    //this.uploadService.upload("").subscribe();
}
}
supprime(fileName:string) {
  this.uploadService.deleteUpload(fileName).subscribe({
    next:data=>{
       alert("supprimer avec succès")
       this.uploadService.getFiles().subscribe({
        next:value=>{
         this.listeImage=value;
        }
      })
    },
    error:err=>{
      console.log(err);
    }
  })
  }
}
