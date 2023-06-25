import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BooksRoutingModule } from './books-routing.module';
import { BooksPageComponentsComponent } from './pages/books-page-components/books-page-components.component';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    BooksPageComponentsComponent
  ],
  imports: [
    CommonModule,
    BooksRoutingModule,
    ReactiveFormsModule
  ],
  
})
export class BooksModule { }
