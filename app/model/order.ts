import {Serializable} from "./Serializable";
import {OrderItem} from "./order_item";

export class Order extends Serializable {
  static relationships = {
    items: OrderItem
  };

  id: number;
  customerId: number;
  customerName: string;
  items: OrderItem[];
  orderDate: number;
  status: string;

  getTotalAmount() {
    let total: number = 0;
    if (this.items) {
      this.items.forEach((item) => {
        total += item.getTotalPrice();
      });
    }
    return total;
  }

  public valueOf(json: any) {
    super.valueOf(json);
    if (json["items"]) {
      this.items = [];
      json["items"].forEach((item) => {
        let oItem = new OrderItem();
        oItem.valueOf(item);
        this.items.push(oItem);
      });
    }
  }
}
