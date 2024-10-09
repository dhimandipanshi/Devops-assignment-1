// src/models/Book.ts
export class Book {
    constructor(
    public id: string,
    public title: string,
    public author: string,
    public isbn: string,
    public publicationDate: Date,
    public status: 'available' | 'checked out' | 'reserved'
    ) {}

    checkOut(): void {
    if (this.status === 'available') {
        this.status = 'checked out';
    } else {
        throw new Error('Book is not available for checkout');
    }
    }

    returnBook(): void {
    this.status = 'available';
    }

    reserve(): void {
    if (this.status === 'available') {
        this.status = 'reserved';
    } else {
        throw new Error('Book is not available for reservation');
}
    }

    updateStatus(newStatus: 'available' | 'checked out' | 'reserved'): void {
    this.status = newStatus;
    }
}

