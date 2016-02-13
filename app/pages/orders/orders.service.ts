import {Injectable} from "angular2/core";
import {Events, Storage, LocalStorage} from "ionic-framework/ionic";
import {Observable} from "rxjs/Observable";
import {FirebaseService} from "firebase-angular2/core";

import {ServiceResult} from "../../model/service_result";
import {AppSettings} from "../../app.settings";
import {Order} from "../../model/order";

// Tell TypeScript that Firebase is a global object.
declare var Firebase;


@Injectable()
export class OrdersService {
  private orders: Observable<Order[]>;
  private service: FirebaseService;
  constructor() {
    this.service = new FirebaseService(new Firebase(AppSettings.FIREBASE_ENDPOINT));
  }

  getAllOrders() {
    let service = this.service.child("orders");
    return service.value.map((orders) => {
      return orders.map((order, i) => {
        let jOrder = new Order();
        jOrder.valueOf(order);
        return jOrder;
      });
      // return orders.map((order, i ) => {
      //   console.log(order);
      //   return order;
      // })
    });
  }
}
