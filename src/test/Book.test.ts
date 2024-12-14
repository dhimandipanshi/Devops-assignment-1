import { Book, BookStatus } from '../entities/Book';

describe('Book', () => {
    let book: Book;

    beforeEach(() => {
        book = new Book('B1', 'Test Book', 'Test Author', '1234567890', new Date());
    });

    test('should check out a book', () => {
        book.checkOut();
        expect(book.status).toBe(BookStatus.CHECKED_OUT);
    });

    test('should throw error when checking out an unavailable book', () => {
        book.checkOut(); // First checkout
        expect(() => book.checkOut()).toThrow('Book is not available for checkout');
    });

    test('should return a book', () => {
        book.checkOut();
        book.returnBook();
        expect(book.status).toBe(BookStatus.AVAILABLE);
    });

    test('should reserve a book', () => {
        book.reserve();
        expect(book.status).toBe(BookStatus.RESERVED);
    });

    test('should update book status', () => {
        book.updateStatus(BookStatus.CHECKED_OUT);
        expect(book.status).toBe(BookStatus.CHECKED_OUT);
    });

    test('subtracts 5 - 2 to equal 3', () => {
        expect(5 - 2).toBe(3);
    });
});