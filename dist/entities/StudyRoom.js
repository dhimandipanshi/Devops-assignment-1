"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StudyRoom = void 0;
class StudyRoom {
    constructor(id, capacity, equipment) {
        this.id = id;
        this.capacity = capacity;
        this.equipment = equipment;
        this.status = RoomStatus.AVAILABLE;
    }
    reserve() {
        if (this.status === RoomStatus.AVAILABLE) {
            this.status = RoomStatus.RESERVED;
        }
    }
    cancelReservation() {
        this.status = RoomStatus.AVAILABLE;
    }
    checkAvailability(date, time, duration) {
        return this.status === RoomStatus.AVAILABLE;
    }
}
exports.StudyRoom = StudyRoom;
var RoomStatus;
(function (RoomStatus) {
    RoomStatus["AVAILABLE"] = "available";
    RoomStatus["RESERVED"] = "reserved";
})(RoomStatus || (RoomStatus = {}));
