"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Librarian = void 0;
const Book_1 = require("./Book");
class Librarian {
    constructor(id, name, role) {
        this.id = id;
        this.name = name;
        this.role = role;
    }
    checkOutBook(student, book) {
        student.borrowBook(book);
    }
    processReturn(student, book) {
        student.returnBook(book);
    }
    addNewBook(bookDetails) {
        const newBook = new Book_1.Book(bookDetails.id, bookDetails.title, bookDetails.author, bookDetails.isbn, bookDetails.publicationDate);
        return newBook;
    }
    manageReservations(reservation, status) {
        reservation.updateStatus(status);
    }
}
exports.Librarian = Librarian;
