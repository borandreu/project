import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MainService {

  constructor(private http: HttpClient) { }

  getAll(model: string): Observable<any> {
    return this.http.get<any>(`http://localhost:5000/${model}`)
  }

  getOne(model: string, id: string | number): Observable<any> {
    return this.http.get(`http://localhost:5000/${model}/${id}`)
  }

  search(searchInput: string) {
    const params = new HttpParams().set("search", searchInput)
    return this.http.get(`http://localhost:5000/?${params}`)
  }
}
