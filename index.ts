// src/index.ts
import { LibraryService } from './src/services/LibraryService';
import { Book } from './src/entities/Book';
import { Student } from './src/entities/Student';
import { StudyRoom } from './src/entities/StudyRoom';
import { Librarian } from './src/entities/Librarian';

// Sample data to initialize the system
const librarian = new Librarian('1', 'John Doe');
const libraryService = new LibraryService(librarian);

// Create some books
const book1 = new Book('1', 'The Great Gatsby', 'available');
const book2 = new Book('2', '1984', 'available');

// Create some students
const student1 = new Student('1', 'Alice');
const student2 = new Student('2', 'Bob');

// Create some study rooms
const room1 = new StudyRoom('1');
const room2 = new StudyRoom('2');

// Add books, students, and rooms to the library system
libraryService.addBook(book1);
libraryService.addBook(book2);
libraryService.addStudent(student1);
libraryService.addStudent(student2);
libraryService.addRoom(room1);
libraryService.addRoom(room2);

// Perform some operations
try {
  // Checkout a book
  libraryService.checkoutBook('1', '1'); // Book 1 checked out to Student 1

  // Reserve a study room
  const reservation = libraryService.reserveRoom('1', '1', new Date(), '10:00 AM', 2); // Student 1 reserves Room 1

console.log('Room Reservation:', reservation);
} catch (error) {
console.error(error.message);
}
```