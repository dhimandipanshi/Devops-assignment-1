class Book {
    id: string;
    title: string;
    author: string;
    isbn: string;
    publicationDate: Date;
    status: BookStatus;

    constructor(id: string, title: string, author: string, isbn: string, publicationDate: Date) {
    this.id = id;
    this.title = title;
    this.author = author;
    this.isbn = isbn;
    this.publicationDate = publicationDate;
    this.status = BookStatus.AVAILABLE;
    }

    checkOut(): void {
    if (this.status === BookStatus.AVAILABLE) {
        this.status = BookStatus.CHECKED_OUT;
    }
    }

    returnBook(): void {
    this.status = BookStatus.AVAILABLE;
    }

    reserve(): void {
    if (this.status === BookStatus.AVAILABLE) {
        this.status = BookStatus.RESERVED;
    }
    }

    updateStatus(newStatus: BookStatus): void {
    this.status = newStatus;
    }
}

enum BookStatus {
    AVAILABLE = "available",
    CHECKED_OUT = "checked_out",
    RESERVED = "reserved"
}
