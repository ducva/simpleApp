import {CORE_DIRECTIVES} from "angular2/common";

import {Page, NavController} from "ionic-framework/ionic";
import {Observable} from "rxjs/Observable";

import {User} from "../../model/user";
import {Order} from "../../model/order";

import {AppSettings} from "../../app.settings";
import {OrdersService} from "./orders.service";
@Page({
  templateUrl: "build/pages/orders/orders.html",
  providers: [OrdersService],
  directives: [CORE_DIRECTIVES]
})
export class OrdersPage {
  public userData;
  public selectedOrder;
  public orders: Observable<Order[]>;
  constructor(private _service: OrdersService, private navigator: NavController) {
  }

  getOrders() {
    this.orders = this._service.getAllOrders();
  }

  ngOnInit(): any {
    this.getOrders();
  }

  openDetail(order: Order) {
    this.selectedOrder = order;
  }

  closeDetail() {
    this.selectedOrder = null;
  }
}
