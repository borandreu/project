import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { MainService } from 'src/app/services/main.service';

@Injectable({
  providedIn: 'root'
})
export class BookService extends MainService {

  constructor(http: HttpClient) {
    super(http)
  }

  findAll(): Observable<any> {
    return super.getAll("books")
  }

  findOne(id: string | number): Observable<any> {
    return super.getOne("books", id)
  }

}
