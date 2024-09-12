import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class RestAPIService {

  constructor(private _http:HttpClient) { }

  baseUrl = "http://localhost:5000/"
  getData(url:string){
    return this._http.get(this.baseUrl + url);
  }

    UpdateData(url:string,body: any,id: any){
    return this._http.get(this.baseUrl + url);
  }

  DeleteData(endpoint: string): Observable<any> {
    return this._http.delete(`${this.baseUrl}${endpoint}`);
  }

    postData(url:string){
    return this._http.get(this.baseUrl + url);
  }
}
