// src/services/LibraryService.ts
import { Book } from '../entities/Book';
import { Student } from '../entities/Student';
import { Librarian } from '../entities/Librarian';
import { StudyRoom } from '../entities/StudyRoom';
import { Reservation } from '../entities/Reservation';

export class LibraryService {
private books: Map<string, Book> = new Map();
private students: Map<string, Student> = new Map();
private rooms: Map<string, StudyRoom> = new Map();
private reservations: Reservation[] = [];

constructor(private librarian: Librarian) {}

  // Book Checkout Functionality
checkoutBook(bookId: string, studentId: string): void {
    const book = this.books.get(bookId);
    const student = this.students.get(studentId);

    if (!book || !student) {
    throw new Error('Book or student not found');
    }

    if (book.status !== 'available') {
    throw new Error('Book is not available for checkout');
    }

    if (student.borrowedBooks.length >= 5) {
    throw new Error('Student has reached the maximum number of borrowed books');
    }

    book.checkOut();
    student.borrowBook(bookId);
    this.librarian.checkOutBook(bookId, studentId);

    console.log(`Book ${book.title} checked out to ${student.name}`);
}

  // Room Reservation Functionality
reserveRoom(studentId: string, roomId: string, date: Date, time: string, duration: number): Reservation {
    const student = this.students.get(studentId);
    const room = this.rooms.get(roomId);

    if (!student || !room) {
    throw new Error('Student or room not found');
    }

    if (!room.checkAvailability()) {
    throw new Error('Room is not available for the requested time');
    }

    const reservation = new Reservation(
    Date.now().toString(), // Simple ID generation
    date,
    time,
    duration,
    studentId,
    roomId
    );

    reservation.create();
    room.reserve();
    this.reservations.push(reservation);

    console.log(`Room ${roomId} reserved for ${student.name}`);

    return reservation;
}

  // Helper methods to add books, students, and rooms to the system
addBook(book: Book): void {
    this.books.set(book.id, book);
}

addStudent(student: Student): void {
this.students.set(student.id, student);
}

addRoom(room: StudyRoom): void {
    this.rooms.set(room.id, room);
}
}