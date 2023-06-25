import { Component, OnInit } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';
import { HttpClient } from '@angular/common/http';
import { BookService } from '../home-page/services/book.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-single-book-page',
  templateUrl: './single-book-page.component.html',
  styleUrls: ['./single-book-page.component.scss'],
  animations: [
    trigger('flipAnimation', [
      state('front', style({ transform: 'rotateY(0)' })),
      state('back', style({ transform: 'rotateY(180deg)' })),
      transition('front => back', animate('500ms ease-out')),
      transition('back => front', animate('500ms ease-out')),
    ]),
  ],
})
export class SingleBookPageComponent implements OnInit{
  flipState: string = 'front';

  constructor(private service: BookService, private activeRoute: ActivatedRoute){}

  ngOnInit(): void {
    // this.activeRoute.params()
  }

  flip() {
    this.flipState = this.flipState === 'front' ? 'back' : 'front';
  }

  

  // getOne(){
  //   this.service.getOne().subscribe(res)
  // }
}
