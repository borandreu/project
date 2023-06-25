import { Component, OnInit } from '@angular/core';
import { BookService } from './services/book.service';
import { Book } from './models/book';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  books!: Book[]

  constructor(private service: BookService) { }

  ngOnInit(): void {
    this.getAll()
  }

  getAll() {
    this.service.findAll().subscribe(res => {
      console.log(res)
    })
  }

}
