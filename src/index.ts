import { Book } from './entities/Book';
import { Student } from './entities/Student';
import { Bookstore } from './entities/Bookstore';

// Create an instance of the bookstore
const bookstore = new Bookstore();

// Create sample books
const book1 = new Book(1, 'The Great Gatsby', 'F. Scott Fitzgerald', true);
const book2 = new Book(2, '1984', 'George Orwell', true);
const book3 = new Book(3, 'To Kill a Mockingbird', 'Harper Lee', true);

// Add books to the bookstore
bookstore.addBook(book1);
bookstore.addBook(book2);
bookstore.addBook(book3);

// Create sample students
const student1 = new Student(1, 'Alice');
const student2 = new Student(2, 'Bob');

// Add students to the bookstore
bookstore.addStudent(student1);
bookstore.addStudent(student2);

// Demonstrate borrowing a book
console.log(bookstore.borrowBook(1, 1)); // Alice borrows "The Great Gatsby"
console.log(bookstore.borrowBook(2, 1)); // Bob tries to borrow "The Great Gatsby" (should fail)

// Demonstrate returning a book
console.log(bookstore.returnBook(1, 1)); // Alice returns "The Great Gatsby"
console.log(bookstore.borrowBook(2, 1)); // Bob borrows "The Great Gatsby" after it's returned

// Show current state of the students' borrowed books
console.log('Alice borrowed books:', student1.borrowedBooks);
console.log('Bob borrowed books:', student2.borrowedBooks);
