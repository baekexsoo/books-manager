import { Component, OnInit } from '@angular/core';
import {Book} from "../../models/book.model";
import {ActivatedRoute, Router} from "@angular/router";
import {BookService} from "../../services/book/book.service";

@Component({
  selector: 'app-edit-book-view',
  templateUrl: './edit-book-view.component.html',
  styleUrls: ['./edit-book-view.component.css']
})
export class EditBookViewComponent implements OnInit {

  book: Book;

  constructor(private route: ActivatedRoute, private router: Router,
              private bookService: BookService) { }

  ngOnInit(): void {
    const id = this.route.snapshot.params.id;

    this.book = this.bookService.getElementById(+id);
  }

  /**
   * Method called when the user click on the edit button
   */
  onSubmitEditBook() {
    this.bookService.updateBook(this.book);
    this.router.navigate(['books']);
  }

}
