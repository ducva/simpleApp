import {Serializable} from "./Serializable";

export class OrderItem extends Serializable {
  name: string;
  quantity: number = 0;
  unitPrice: number = 0;
  getTotalPrice(): number {
    return this.quantity * this.unitPrice;
  }
}
