import { Component } from '@angular/core';
import { collection } from "../../mocks/collections.db"

@Component({
  selector: 'app-collections',
  templateUrl: './collections.component.html',
  styleUrls: ['./collections.component.scss']
})
export class CollectionsComponent {

  collection = collection

  slice: number = 4

  seeMore() {
    this.slice += 4
  }
}
