import { HttpClient, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FileUploadService {
  constructor(private http:HttpClient) { }
  private baseUrl="http://localhost:9096/api/v2"

  upload(file: File) {
    const formData:any= new FormData();
    formData.append('file', file);
    const req = new HttpRequest('POST', `${this.baseUrl}/upload/base`, formData, {
      responseType: 'json',
    });
    return this.http.request(req);
  }
  getFiles(): Observable<any> {
    return this.http.get(this.baseUrl+"/uploads")
  }
  downloadFile(fileName:string):Observable<any>{
    return this.http.get(this.baseUrl+"/load/"+fileName);
  }
  deleteUpload(fileName:String){
    return this.http.delete(this.baseUrl+"/delete/"+fileName);
  }

}
