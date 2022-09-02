import { Component, OnInit } from '@angular/core';
import {BookService} from "../../services/book/book.service";

@Component({
  selector: 'app-books-view',
  templateUrl: './books-view.component.html',
  styleUrls: ['./books-view.component.css']
})
export class BooksViewComponent implements OnInit {

  books: Array<any>;

  constructor(private bookService: BookService) {}

  ngOnInit() {
    this.books = this.bookService.books;
  }

  /**
   * Method called when the user click on one of the two buttons
   * for switch the books status
   * @param newStatus
   */
  onClickSwitchAllBooksStatus(newStatus: string) {
    this.bookService.switchAllBooksStatus(newStatus);
  }
}
