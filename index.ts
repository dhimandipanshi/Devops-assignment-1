import { Book } from './src/entities/Book';
import { Student } from './src/entities/Student';
import { LibraryService } from './src/services/LibraryService';

const libraryService = new LibraryService();

const book1 = new Book(1, '1984', 'George Orwell', '1234567890', new Date('1949-06-08'));
const student1 = new Student(1, 'Alice', 'alice@example.com');

libraryService.addBook(book1);
libraryService.registerStudent(student1);

student1.borrowBook(book1);
student1.returnBook(book1);
