import { LibraryService } from '../Services/LibraryService';
import { Book, BookStatus } from '../entities/Book';
import { Student } from '../entities/Student';
import { StudyRoom } from '../entities/StudyRoom';
import { Reservation } from '../entities/Reservation';

describe('LibraryService', () => {
    let libraryService: LibraryService;
    let book: Book;
    let student: Student;
    let studyRoom: StudyRoom;
    let reservation: Reservation;

    beforeEach(() => {
        libraryService = new LibraryService();
        book = new Book('1', '1984', 'George Orwell', '80085', new Date());
        student = new Student('1', 'John Doe', 'john.doe@example.com');
        studyRoom = new StudyRoom('101', 4, ['whiteboard']);
        reservation = new Reservation('1', new Date(), '12:00', 2, '1', '101');

        libraryService.addBook(book);
        libraryService.students.set(student.id, student);
        libraryService.studyRooms.set(studyRoom.id, studyRoom);
    });

    it('should check out a book for a student', () => {
        const result = libraryService.checkOutBook('1', '1');
        expect(result).toBe(true);
        expect(book.status).toBe(BookStatus.CHECKED_OUT);
        expect(student.borrowedBooks.length).toBe(1);
    });

    it('should return a book for a student', () => {
        libraryService.checkOutBook('1', '1');
        const result = libraryService.returnBook('1', '1');
        expect(result).toBe(true);
        expect(book.status).toBe(BookStatus.AVAILABLE);
        expect(student.borrowedBooks.length).toBe(0);
    });

    it('should reserve a study room for a student', () => {
        const result = libraryService.reserveStudyRoom('101', '1', reservation);
        expect(result).toBe(true);
        expect(studyRoom.status).toBe('reserved');  // Make sure studyRoom has a `status` property
    });
});
