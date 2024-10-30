"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReservationStatus = exports.Reservation = void 0;
class Reservation {
    constructor(id, date, time, duration, studentId, roomId) {
        this.id = id;
        this.date = date;
        this.time = time;
        this.duration = duration;
        this.studentId = studentId;
        this.roomId = roomId;
        this.status = ReservationStatus.PENDING;
    }
    updateStatus(newStatus) {
        this.status = newStatus;
    }
}
exports.Reservation = Reservation;
var ReservationStatus;
(function (ReservationStatus) {
    ReservationStatus["PENDING"] = "pending";
    ReservationStatus["CONFIRMED"] = "confirmed";
    ReservationStatus["CANCELED"] = "canceled";
})(ReservationStatus || (exports.ReservationStatus = ReservationStatus = {}));
