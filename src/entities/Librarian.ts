class Librarian {
  id: string;
  name: string;
  role: string;

  constructor(id: string, name: string, role: string) {
    this.id = id;
    this.name = name;
    this.role = role;
  }

  checkOutBook(student: Student, book: Book): void {
    student.borrowBook(book);
  }

  processReturn(student: Student, book: Book): void {
    student.returnBook(book);
  }

  addNewBook(bookDetails: { id: string; title: string; author: string; isbn: string; publicationDate: Date }): Book {
    const newBook = new Book(bookDetails.id, bookDetails.title, bookDetails.author, bookDetails.isbn, bookDetails.publicationDate);
    return newBook;
  }

  manageReservations(reservation: Reservation, status: ReservationStatus): void {
    reservation.updateStatus(status);
  }
}
