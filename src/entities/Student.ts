import { Book, BookStatus } from "./Book";
import { Fine } from "./Fine";
import { Reservation } from "./Reservation";
import { StudyRoom } from "./StudyRoom";

export class Student {
  id: string;
  name: string;
  contactInfo: string;
  borrowedBooks: Book[] = [];
  fines: Fine[] = [];

  constructor(id: string, name: string, contactInfo: string) {
    this.id = id;
    this.name = name;
    this.contactInfo = contactInfo;
  }

  borrowBook(book: Book): void {
    if (book.status === BookStatus.AVAILABLE) {
      book.checkOut();
      this.borrowedBooks.push(book);
    }
  }

  returnBook(book: Book): void {
    const index = this.borrowedBooks.findIndex(b => b.id === book.id);
    if (index !== -1) {
      book.returnBook();
      this.borrowedBooks.splice(index, 1);
    }
  }

  payFine(fine: Fine): void {
    fine.pay();
  }

  reserveRoom(room: StudyRoom, reservation: Reservation): void {
    if (room.checkAvailability(reservation.date, reservation.time, reservation.duration)) {
      room.reserve();
      reservation.studentId = this.id;
    }
  }
}
