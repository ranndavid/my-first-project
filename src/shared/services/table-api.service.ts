import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Table } from '../../app/components/Type/Utils';
@Injectable({
  providedIn: 'root'
})
export class TableAPIService {

  constructor(private _http: HttpClient) { }

  baseUrl = "http://localhost:5000/" + "tables"
  gets(): Observable<Table[]> {
    return this._http.get<Table[]>(this.baseUrl);
  }
  getById(id: number) {
    return this._http.get(this.baseUrl + "/" + id);
  }

  post(table: Table): Observable<Table> {
    return this._http.post<Table>(`${this.baseUrl}`, table);
  }

  put(table: Table): Observable<Table> {
    return this._http.put<Table>(`${this.baseUrl}/${table.id}`, table);
  }

  delete(table: Table): Observable<Table> {
    return this._http.delete<Table>(`${this.baseUrl}/${table.id}`);
  }
}
