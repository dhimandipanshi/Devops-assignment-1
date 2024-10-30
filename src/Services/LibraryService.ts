import { Book } from '../entities/Book';
import { Student } from '../entities/Student';
import { Librarian } from '../entities/Librarian';
import { StudyRoom } from '../entities/StudyRoom';
import { Reservation } from '../entities/Reservation';
import { Fine } from '../entities/Fine';

export class LibraryService {
  books: Map<string, Book>;
  students: Map<string, Student>;
  librarians: Map<string, Librarian>;
  studyRooms: Map<string, StudyRoom>;
  fines: Map<string, Fine>;

  constructor() {
    this.books = new Map();
    this.students = new Map();
    this.librarians = new Map();
    this.studyRooms = new Map();
    this.fines = new Map();
  }

  // Method to add a book to the library collection
  addBook(book: Book): void {
    this.books.set(book.id, book);
  }

  // Method to check out a book
  checkOutBook(bookId: string, studentId: string): boolean {
    const book = this.books.get(bookId);
    const student = this.students.get(studentId);

    if (book && student && book.status === 'available') {
      student.borrowBook(book);
      return true;
    }
    return false;
  }

  // Method to return a book
  returnBook(bookId: string, studentId: string): boolean {
    const book = this.books.get(bookId);
    const student = this.students.get(studentId);

    if (book && student) {
      student.returnBook(book);
      return true;
    }
    return false;
  }

  // Method to reserve a study room
  reserveStudyRoom(roomId: string, studentId: string, reservation: Reservation): boolean {
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
  assignFine(studentId: string, fineAmount: number, reason: string): Fine {
    const student = this.students.get(studentId);
    if (student) {
      const fine = new Fine(studentId, fineAmount, reason);
      student.fines.push(fine);
      this.fines.set(fine.id, fine);
      return fine;
    }
    throw new Error("Student not found");
  }

  // Method to pay a fine
  payFine(fineId: string, studentId: string): boolean {
    const fine = this.fines.get(fineId);
    const student = this.students.get(studentId);

    if (fine && student) {
      fine.pay();
      return true;
    }
    return false;
  }
}
