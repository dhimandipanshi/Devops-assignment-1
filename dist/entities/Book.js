"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookStatus = exports.Book = void 0;
class Book {
    constructor(id, title, author, isbn, publicationDate) {
        this.id = id;
        this.title = title;
        this.author = author;
        this.isbn = isbn;
        this.publicationDate = publicationDate;
        this.status = BookStatus.AVAILABLE;
    }
    checkOut() {
        if (this.status === BookStatus.AVAILABLE) {
            this.status = BookStatus.CHECKED_OUT;
        }
    }
    returnBook() {
        this.status = BookStatus.AVAILABLE;
    }
    reserve() {
        if (this.status === BookStatus.AVAILABLE) {
            this.status = BookStatus.RESERVED;
        }
    }
    updateStatus(newStatus) {
        this.status = newStatus;
    }
}
exports.Book = Book;
var BookStatus;
(function (BookStatus) {
    BookStatus["AVAILABLE"] = "available";
    BookStatus["CHECKED_OUT"] = "checked_out";
    BookStatus["RESERVED"] = "reserved";
})(BookStatus || (exports.BookStatus = BookStatus = {}));
