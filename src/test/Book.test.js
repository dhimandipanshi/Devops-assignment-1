"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Book_1 = require("../entities/Book");
describe('Book', function () {
    var book;
    beforeEach(function () {
        book = new Book_1.Book('B1', 'Test Book', 'Test Author', '1234567890', new Date());
    });
    test('should check out a book', function () {
        book.checkOut();
        expect(book.status).toBe(Book_1.BookStatus.CHECKED_OUT);
    });
    test('should throw error when checking out an unavailable book', function () {
        book.checkOut(); // First checkout
        expect(function () { return book.checkOut(); }).toThrow('Book is not available for checkout');
    });
    test('should return a book', function () {
        book.checkOut();
        book.returnBook();
        expect(book.status).toBe(Book_1.BookStatus.AVAILABLE);
    });
    test('should reserve a book', function () {
        book.reserve();
        expect(book.status).toBe(Book_1.BookStatus.RESERVED);
    });
    test('should update book status', function () {
        book.updateStatus(Book_1.BookStatus.CHECKED_OUT);
        expect(book.status).toBe(Book_1.BookStatus.CHECKED_OUT);
    });
});
