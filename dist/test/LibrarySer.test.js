"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const LibraryService_1 = require("../Services/LibraryService");
const Book_1 = require("../entities/Book");
const Student_1 = require("../entities/Student");
const StudyRoom_1 = require("../entities/StudyRoom");
const Reservation_1 = require("../entities/Reservation");
describe('LibraryService', () => {
    let libraryService;
    let book;
    let student;
    let studyRoom;
    let reservation;
    beforeEach(() => {
        libraryService = new LibraryService_1.LibraryService();
        book = new Book_1.Book('1', '1984', 'George Orwell', '80085', new Date());
        student = new Student_1.Student('1', 'John Doe', 'john.doe@example.com');
        studyRoom = new StudyRoom_1.StudyRoom('101', 4, ['whiteboard']);
        reservation = new Reservation_1.Reservation('1', new Date(), '12:00', 2, '1', '101');
        libraryService.addBook(book);
        libraryService.students.set(student.id, student);
        libraryService.studyRooms.set(studyRoom.id, studyRoom);
    });
    it('should check out a book for a student', () => {
        const result = libraryService.checkOutBook('1', '1');
        expect(result).toBe(true);
        expect(book.status).toBe(Book_1.BookStatus.CHECKED_OUT);
        expect(student.borrowedBooks.length).toBe(1);
    });
    it('should return a book for a student', () => {
        libraryService.checkOutBook('1', '1');
        const result = libraryService.returnBook('1', '1');
        expect(result).toBe(true);
        expect(book.status).toBe(Book_1.BookStatus.AVAILABLE);
        expect(student.borrowedBooks.length).toBe(0);
    });
    it('should reserve a study room for a student', () => {
        const result = libraryService.reserveStudyRoom('101', '1', reservation);
        expect(result).toBe(true);
        expect(studyRoom.status).toBe('reserved'); // Make sure studyRoom has a `status` property
    });
});
