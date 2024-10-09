
  // src/models/Student.ts
  export class Student {
    public borrowedBooks: string[] = []; // Array of book IDs
    public fines: number = 0;

    constructor(
    public id: string,
    public name: string,
    public contactInformation: string
    ) {}

    borrowBook(bookId: string): void {
    this.borrowedBooks.push(bookId);
    }

    returnBook(bookId: string): void {
    const index = this.borrowedBooks.indexOf(bookId);
    if (index > -1) {
        this.borrowedBooks.splice(index, 1);
    }
    }

    payFine(amount: number): void {
    if (amount <= this.fines) {
        this.fines -= amount;
    } else {
        throw new Error('Payment amount exceeds total fines');
    }
    }

    reserveRoom(roomId: string): void {
      // Implementation depends on how we manage room reservations
    console.log(`Room ${roomId} reserved for student ${this.id}`);
    }
  }