class Fine {
  id: string;
  amount: number;
  reason: string;
  status: FineStatus;

  constructor(id: string, amount: number, reason: string) {
    this.id = id;
    this.amount = amount;
    this.reason = reason;
    this.status = FineStatus.UNPAID;
  }

  calculate(daysOverdue: number): number {
    return this.amount * daysOverdue;
  }

  pay(): void {
    this.status = FineStatus.PAID;
  }

  waive(): void {
    this.status = FineStatus.WAIVED;
  }
}

enum FineStatus {
  PAID = "paid",
  UNPAID = "unpaid",
  WAIVED = "waived"
}
