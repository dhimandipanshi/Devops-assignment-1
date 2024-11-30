# Library Management System

Library Management System is a TypeScript-based project to efficiently manage library resources like books, fines, reservations, and study rooms. It is designed for scalability and easy maintenance, targeting educational institutions and community libraries.

---

## Features

- **Book Management**: Add, check out, return, and reserve books with accurate availability tracking.
- **Fine Calculation**: Automatically calculate and manage overdue fines.
- **Study Room Reservations**: Book and manage study room reservations based on availability.
- **Librarian Tools**: Manage borrowing history, fines, and library administration tasks.
- **Scalable Design**: Modular TypeScript codebase for easy expansion and future enhancements.

---

## Project Goals

1. **Efficient Resource Management**: Optimize resource allocation, including books and study rooms.
2. **User-Friendly Interface**: Provide an intuitive system for students and administrators.
3. **Accurate Tracking**: Maintain accurate records of borrowed books, reservations, and fines.
4. **Scalability**: Support larger libraries with future-ready code architecture.
5. **Data Insights**: Analyze borrowing trends, resource usage, and fine collection for better decisions.

---

## File Structure

Uni_library_mang/ ├── dist/ # Compiled JavaScript files ├── node_modules/ # Dependencies ├── src/ # Source code │ ├── entities/ # Core entity classes │ │ ├── Book.ts │ │ ├── Fine.ts │ │ ├── Librarian.ts │ │ ├── Reservation.ts │ │ ├── Student.ts │ │ ├── StudyRoom.ts │ ├── Services/ # Service classes │ │ ├── LibraryService.ts │ ├── test/ # Unit tests │ ├── Book.test.ts │ ├── LibrarySer.test.ts ├── package.json # Project metadata ├── package-lock.json # Dependency lock file ├── tsconfig.json # TypeScript configuration


---

## Installation

Follow these steps to set up and run the project:

1. Clone the repository:
   ```bash
   git clone https://github.com/dhimandipanshi/Devops-assignment-1

2. Install dependencies: 
   ```bash
   npm install 

3. Compile the TypeScript files to JavaScript:
   ```bash
   npm run build

4. Run the project: 
   ```bash
   npm start

## Usage

### Book Management

```typescript
const Book = require('./src/entities/Book');

// Create a new book
const book = new Book('123', 'The Great Gatsby', 'F. Scott Fitzgerald');

// Check out a book
book.checkOut('Student123');
console.log(book.status); // Outputs: CHECKED_OUT
```

## Study Room Reservations

### Overview

This section outlines the functionality for reserving study rooms within the library system.

### Code Example

Here is an example of how to reserve a study room using TypeScript:

```typescript
const StudyRoom = require('./src/entities/StudyRoom');

// Create a new study room
const studyRoom = new StudyRoom('Room A', 5);

// Reserve the study room for a student
studyRoom.reserve('Student456');

// Check availability of the study room
console.log(studyRoom.isAvailable()); // Outputs: false 
```

## License

This project is licensed under the MIT License.

## Contact

For questions or support, contact the project maintainer:

- **Name**: Dipanshi Dhiman
- **Email**: dhimandipanshi713@gmail.com
- **GitHub**: https://github.com/dhimandipanshi
    
