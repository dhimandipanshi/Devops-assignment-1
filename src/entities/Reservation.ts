export class Reservation {
  id: string;
  date: Date;
  time: string;
  duration: number;
  studentId: string;
  roomId: string;
  status: ReservationStatus;

  constructor(id: string, date: Date, time: string, duration: number, studentId: string, roomId: string) {
    this.id = id;
    this.date = date;
    this.time = time;
    this.duration = duration;
    this.studentId = studentId;
    this.roomId = roomId;
    this.status = ReservationStatus.PENDING;
  }

  updateStatus(newStatus: ReservationStatus): void {
    this.status = newStatus;
  }
}

export enum ReservationStatus {
  PENDING = "pending",
  CONFIRMED = "confirmed",
  CANCELED = "canceled"
}
