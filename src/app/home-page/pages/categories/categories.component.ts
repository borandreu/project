import { Component } from '@angular/core';
import { bookCategories } from '../../mocks/categories.db'

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent {

  bookCategories = bookCategories

}
