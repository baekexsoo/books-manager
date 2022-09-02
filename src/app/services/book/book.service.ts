import {Injectable} from '@angular/core';
import {Book} from "../../models/book.model";

@Injectable({
  providedIn: 'root'
})
export class BookService {

  books: Array<Book>;

  constructor() {

    this.books = [];

    for (let i = 1; i <= 10; i++) {
      this.books.push(
        new Book('Livre ' + i, 'Auteur ' + i, 'Lorem ipsum', 'Libre')
      );
    }

  }

  /**
   * Method for switch all the books status
   * @param newStatus
   */
  switchAllBooksStatus(newStatus: string) {
    for (const book of this.books) {
      book.status = newStatus;
    }
  }

  /**
   * Method for switch book status
   * @param bookId
   * @param newStatus
   */
  switchBookStatus(bookId: number, newStatus: string) {
    for (const book of this.books) {
      if (book.id === bookId) {
        book.status = newStatus;
        break;
      }
    }
  }

  /**
   * Method for retrieve one book by his id
   * @param bookId
   */
  getElementById(bookId: number) {
    for (const book of this.books) {
      if (book.id === bookId) {
        return book;
      }
    }
    return null;
  }

  /**
   * Method for add a new book on the books array
   * @param newBook
   */
  addBook(newBook: Book) {
    this.books.push(newBook);
  }

  /**
   * Method for edit an existing book on the books array
   * @param editedBook
   */
  updateBook(editedBook: Book) {
    for (let i = 0; i < this.books.length - 1; i++) {
      if (this.books[i].id === editedBook.id) {
        this.books[i] = editedBook;
        break;
      }
    }
  }

}
