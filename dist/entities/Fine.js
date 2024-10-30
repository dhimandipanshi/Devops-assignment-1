"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Fine = void 0;
class Fine {
    constructor(id, amount, reason) {
        this.id = id;
        this.amount = amount;
        this.reason = reason;
        this.status = FineStatus.UNPAID;
    }
    calculate(daysOverdue) {
        return this.amount * daysOverdue;
    }
    pay() {
        this.status = FineStatus.PAID;
    }
    waive() {
        this.status = FineStatus.WAIVED;
    }
}
exports.Fine = Fine;
var FineStatus;
(function (FineStatus) {
    FineStatus["PAID"] = "paid";
    FineStatus["UNPAID"] = "unpaid";
    FineStatus["WAIVED"] = "waived";
})(FineStatus || (FineStatus = {}));
