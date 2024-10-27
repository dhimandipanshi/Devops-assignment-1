class StudyRoom {
    id: string;
    capacity: number;
    equipment: string[];
    status: RoomStatus;

    constructor(id: string, capacity: number, equipment: string[]) {
    this.id = id;
    this.capacity = capacity;
    this.equipment = equipment;
    this.status = RoomStatus.AVAILABLE;
    }

    reserve(): void {
    if (this.status === RoomStatus.AVAILABLE) {
        this.status = RoomStatus.RESERVED;
    }
    }

    cancelReservation(): void {
    this.status = RoomStatus.AVAILABLE;
    }

    checkAvailability(date: Date, time: string, duration: number): boolean {
    return this.status === RoomStatus.AVAILABLE;
    }
}

enum RoomStatus {
    AVAILABLE = "available",
    RESERVED = "reserved"
}
