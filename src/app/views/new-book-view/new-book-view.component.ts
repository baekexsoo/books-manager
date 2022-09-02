import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import {Book} from "../../models/book.model";
import {BookService} from "../../services/book/book.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-new-book-view',
  templateUrl: './new-book-view.component.html',
  styleUrls: ['./new-book-view.component.css']
})
export class NewBookViewComponent implements OnInit {

  book: Book;

  constructor(private bookService: BookService, private router: Router) { }

  ngOnInit(): void {
    this.book = new Book('','','','Libre');
  }

  /**
   * Method called when the user click on the submit button
   */
  onSubmitNewBook() {
    this.bookService.addBook(this.book);
    this.router.navigate(['books']);
  }


}
