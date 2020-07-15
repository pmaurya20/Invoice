export class Product {
    constructor(public name: string, public price: number, public quantity: number, public amount: number) {
        this.name = name;
        this.price = price;
        this.quantity = quantity;
    }
}