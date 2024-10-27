import { Book } from '../src/Book';

describe('Book Class', () => {
let book: Book;

beforeEach(() => {
    book = new Book('1', 'The Great Gatsby', 'F. Scott Fitzgerald');
});

it('should initialize book as available', () => {
    expect(book.available).toBe(true);
});

it('should mark book as checked out', () => {
    book.checkOut();
    expect(book.available).toBe(false);
});

it('should mark book as available after return', () => {
    book.checkOut();
    book.returnBook();
    expect(book.available).toBe(true);
});
});
