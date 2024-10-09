
  // src/models/Fine.ts
  export class Fine {
    constructor(
    public id: string,
    public amount: number,
    public reason: string,
    public status: 'paid' | 'unpaid'
    ) {}

    calculate(): void {
      // Implementation to calculate the fine amount
    console.log(`Fine calculated: $${this.amount}`);
    }

    pay(): void {
    if (this.status === 'unpaid') {
        this.status = 'paid';
        console.log(`Fine ${this.id} paid`);
    } else {
        throw new Error('Fine has already been paid');
}
    }

    waive(): void {
    this.amount = 0;
    this.status = 'paid';
    console.log(`Fine ${this.id} waived`);
    }
}