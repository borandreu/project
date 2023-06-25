import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BooksPageComponentsComponent } from './books-page-components.component';

describe('BooksPageComponentsComponent', () => {
  let component: BooksPageComponentsComponent;
  let fixture: ComponentFixture<BooksPageComponentsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BooksPageComponentsComponent]
    });
    fixture = TestBed.createComponent(BooksPageComponentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
