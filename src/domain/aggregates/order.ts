import { Product } from './product';

class Order {
  private id: string;
  private customerId: string;
  private orderDate: Date;
  private orderCompletionDate: Date;
  private orderItems: Product[];

  constructor(
    id: string,
    customerId: string,
    orderDate: Date,
    orderCompletionDate: Date,
    orderItems: Product[],
  ) {
    this.id = id;
    this.customerId = customerId;
    this.orderDate = orderDate;
    this.orderCompletionDate = orderCompletionDate;
    this.orderItems = orderItems;
  }

  public addOrderItem(orderItem: Product): void {
    this.orderItems.push(orderItem);
  }

  public addOrderItems(orderItems: Product[]): void {
    this.orderItems.push(...orderItems);
  }
}

export { Order };
