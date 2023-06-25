import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-books-page-components',
  templateUrl: './books-page-components.component.html',
  styleUrls: ['./books-page-components.component.scss']
})
export class BooksPageComponentsComponent {
  constructor(private http: HttpClient) { }
  categories: string[] = ['Higher Education', 'Management Books', 'Engineering Books'];
  authors: string[] = ['Armor Ramsey', 'Armor Ramsey', 'Armor Ramsey', 'Armor Ramsey', 'Armor Ramsey', 'Armor Ramsey']
  BooksPageComponentsComponent = BooksPageComponentsComponent;

  

  getUsers() {
    return this.http.get('/api.............');
  }

  fetchUsers() {
    this.getUsers().subscribe((data) => {
      console.log(data); 
    });
  }
  
  
}

