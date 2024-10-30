"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Student = void 0;
const Book_1 = require("./Book");
class Student {
    constructor(id, name, contactInfo) {
        this.borrowedBooks = [];
        this.fines = [];
        this.id = id;
        this.name = name;
        this.contactInfo = contactInfo;
    }
    borrowBook(book) {
        if (book.status === Book_1.BookStatus.AVAILABLE) {
            book.checkOut();
            this.borrowedBooks.push(book);
        }
    }
    returnBook(book) {
        const index = this.borrowedBooks.findIndex(b => b.id === book.id);
        if (index !== -1) {
            book.returnBook();
            this.borrowedBooks.splice(index, 1);
        }
    }
    payFine(fine) {
        fine.pay();
    }
    reserveRoom(room, reservation) {
        if (room.checkAvailability(reservation.date, reservation.time, reservation.duration)) {
            room.reserve();
            reservation.studentId = this.id;
        }
    }
}
exports.Student = Student;
