// tests/LibraryService.test.ts
import { LibraryService } from '../src/services/LibraryService';
import { Book } from '../src/entities/Book';
import { Student } from '../src/entities/Student';
import { Librarian } from '../src/entities/Librarian';
import { StudyRoom } from '../src/entities/StudyRoom';

describe('LibraryService', () => {
let libraryService: LibraryService;
let librarian: Librarian;

beforeEach(() => {
    librarian = new Librarian('L1', 'John Doe', 'Head Librarian');
    libraryService = new LibraryService(librarian);

    // Add a book
    const book = new Book('B1', 'Test Book', 'Test Author', '1234567890', new Date(), 'available');
    libraryService.addBook(book);

    // Add a student
    const student = new Student('S1', 'Jane Smith', 'jane@example.com');
    libraryService.addStudent(student);

    // Add a room
    const room = new StudyRoom('R1', 4, ['whiteboard', 'projector'], 'available');
    libraryService.addRoom(room);
});

test('should checkout a book successfully', () => {
    expect(() => libraryService.checkoutBook('B1', 'S1')).not.toThrow();
});

test('should throw an error when checking out an unavailable book', () => {
    libraryService.checkoutBook('B1', 'S1');
    expect(() => libraryService.checkoutBook('B1', 'S1')).toThrow('Book is not available for checkout');
});

test('should reserve a room successfully', () => {
    const reservation = libraryService.reserveRoom('S1', 'R1', new Date(), '14:00', 2);
    expect(reservation).toBeDefined();
    expect(reservation.roomId).toBe('R1');
    expect(reservation.studentId).toBe('S1');
});

test('should throw an error when reserving an unavailable room', () => {
    libraryService.reserveRoom('S1', 'R1', new Date(), '14:00', 2);
    expect(() => libraryService.reserveRoom('S1', 'R1', new Date(), '14:00', 2)).toThrow('Room is not available for the requested time');
});
});