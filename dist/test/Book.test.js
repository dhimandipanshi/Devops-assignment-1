"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Book_1 = require("../entities/Book");
describe('Book', () => {
    let book;
    beforeEach(() => {
        book = new Book_1.Book('B1', 'Test Book', 'Test Author', '1234567890', new Date());
    });
    test('should check out a book', () => {
        book.checkOut();
        expect(book.status).toBe(Book_1.BookStatus.CHECKED_OUT);
    });
    test('should throw error when checking out an unavailable book', () => {
        book.checkOut(); // First checkout
        expect(() => book.checkOut()).toThrow('Book is not available for checkout');
    });
    test('should return a book', () => {
        book.checkOut();
        book.returnBook();
        expect(book.status).toBe(Book_1.BookStatus.AVAILABLE);
    });
    test('should reserve a book', () => {
        book.reserve();
        expect(book.status).toBe(Book_1.BookStatus.RESERVED);
    });
    test('should update book status', () => {
        book.updateStatus(Book_1.BookStatus.CHECKED_OUT);
        expect(book.status).toBe(Book_1.BookStatus.CHECKED_OUT);
    });
});

// Running Workplace