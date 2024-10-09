
  // src/models/Reservation.ts
export class Reservation {
    constructor(
    public id: string,
    public date: Date,
    public time: string,
    public duration: number,
    public studentId: string,
    public roomId: string
    ) {}

    create(): void {
      // Implementation to create a new reservation
    console.log(`Reservation created for room ${this.roomId}`);
    }

    cancel(): void {
      // Implementation to cancel the reservation
    console.log(`Reservation for room ${this.roomId} cancelled`);
    }

    modify(newDate: Date, newTime: string, newDuration: number): void {
    this.date = newDate;
    this.time = newTime;
    this.duration = newDuration;
    console.log(`Reservation for room ${this.roomId} modified`);
    }
}
