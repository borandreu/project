import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { MainService } from 'src/app/services/main.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  searchInput!: FormGroup

  constructor(private mainService: MainService, private router: Router) { }

  ngOnInit(): void {
    this.searchInput = new FormGroup({
      search: new FormControl(null)
    })
  }


  searchButton() {
    // const { searchValue } = this.searchInput.value
    const { searchValue } = this.searchInput.value.searchValue

    this.mainService.search(searchValue).subscribe(res => {
      console.log("Response", res)
      this.router.navigate(['/'], { queryParams: { search: searchValue } })
    })
  }
}
