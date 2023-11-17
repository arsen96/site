import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MailService {

  constructor(public http:HttpClient){}
  
  httpGet(url:string) {
    return this.http.get(url);
  }

  httpPost(url:string, {}) {
    return this.http.post(url, { name: "Subrat" });
  }

  sendEmail(url:string, data:any) {
    return this.http.post(url, data);
  }
}
