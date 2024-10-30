"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookStatus = exports.Book = void 0;
var Book = /** @class */ (function () {
    function Book(id, title, author, isbn, publicationDate) {
        this.id = id;
        this.title = title;
        this.author = author;
        this.isbn = isbn;
        this.publicationDate = publicationDate;
        this.status = BookStatus.AVAILABLE;
    }
    Book.prototype.checkOut = function () {
        if (this.status === BookStatus.AVAILABLE) {
            this.status = BookStatus.CHECKED_OUT;
        }
    };
    Book.prototype.returnBook = function () {
        this.status = BookStatus.AVAILABLE;
    };
    Book.prototype.reserve = function () {
        if (this.status === BookStatus.AVAILABLE) {
            this.status = BookStatus.RESERVED;
        }
    };
    Book.prototype.updateStatus = function (newStatus) {
        this.status = newStatus;
    };
    return Book;
}());
exports.Book = Book;
var BookStatus;
(function (BookStatus) {
    BookStatus["AVAILABLE"] = "available";
    BookStatus["CHECKED_OUT"] = "checked_out";
    BookStatus["RESERVED"] = "reserved";
})(BookStatus || (exports.BookStatus = BookStatus = {}));
