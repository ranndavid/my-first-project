import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Ingredient } from '../../app/components/Type/Utils';

@Injectable({
  providedIn: 'root'
})
export class IngredientApiService {
  private apiUrl = 'http://localhost:5000'; // Your base URL

  constructor(private http: HttpClient) { }

  getData(endpoint: string): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/${endpoint}`);
  }


  doDeleteData(endpoint: string): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${endpoint}`);
  }
  postData(url: string, data: any): Observable<any> {
    return this.http.post(this.baseUrl + url, data);
  }


  baseUrl = "http://localhost:5000/" + "ingredients"
  gets(): Observable<Ingredient[]> {
    return this.http.get<Ingredient[]>(this.baseUrl);
  }
  getById(id: number) {
    return this.http.get(this.baseUrl + "/" + id);
  }

  post(ingredient: Ingredient): Observable<Ingredient> {
    return this.http.post<Ingredient>(`${this.baseUrl}`, ingredient);
  }

  put(ingredient: Ingredient): Observable<Ingredient> {
    return this.http.put<Ingredient>(`${this.baseUrl}/${ingredient.id}`, ingredient);
  }

  delete(ingredient: Ingredient): Observable<Ingredient> {
    return this.http.delete<Ingredient>(`${this.baseUrl}/${ingredient.id}`);
  }

}
