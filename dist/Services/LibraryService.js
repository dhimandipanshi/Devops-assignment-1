"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LibraryService = void 0;
const Fine_1 = require("../entities/Fine");
class LibraryService {
    constructor() {
        this.books = new Map();
        this.students = new Map();
        this.librarians = new Map();
        this.studyRooms = new Map();
        this.fines = new Map();
    }
    // Method to add a book to the library collection
    addBook(book) {
        this.books.set(book.id, book);
    }
    // Method to check out a book
    checkOutBook(bookId, studentId) {
        const book = this.books.get(bookId);
        const student = this.students.get(studentId);
        if (book && student && book.status === 'available') {
            student.borrowBook(book);
            return true;
        }
        return false;
    }
    // Method to return a book
    returnBook(bookId, studentId) {
        const book = this.books.get(bookId);
        const student = this.students.get(studentId);
        if (book && student) {
            student.returnBook(book);
            return true;
        }
        return false;
    }
    // Method to reserve a study room
    reserveStudyRoom(roomId, studentId, reservation) {
        const room = this.studyRooms.get(roomId);
        const student = this.students.get(studentId);
        if (room && student && room.status === 'available') {
            student.reserveRoom(room, reservation);
            room.reserve();
            return true;
        }
        return false;
    }
    // Method to calculate and assign fines for overdue books
    assignFine(studentId, fineAmount, reason) {
        const student = this.students.get(studentId);
        if (student) {
            const fine = new Fine_1.Fine(studentId, fineAmount, reason);
            student.fines.push(fine);
            this.fines.set(fine.id, fine);
            return fine;
        }
        throw new Error("Student not found");
    }
    // Method to pay a fine
    payFine(fineId, studentId) {
        const fine = this.fines.get(fineId);
        const student = this.students.get(studentId);
        if (fine && student) {
            fine.pay();
            return true;
        }
        return false;
    }
}
exports.LibraryService = LibraryService;
