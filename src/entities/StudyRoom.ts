class StudyRoom {
    constructor(
    public id: string,
    public capacity: number,
    public equipment: string[],
    public status: 'available' | 'reserved'
    ) {}

    reserveRoom() {
    if (this.status === 'available') {
        this.status = 'reserved';
    } else {
        throw new Error('Room not available');
    }
    }

    cancelReservation() {
    this.status = 'available';
    }
}
