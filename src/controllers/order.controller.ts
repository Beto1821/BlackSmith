import { Request, Response } from 'express';
import OrderService from '../services/order.service';

class OrderController {
  orderService: OrderService;

  constructor() {
    this.orderService = new OrderService();
  }

  getOrders = async (_req: Request, res: Response) => {
    const Orders = await this.orderService.getOrders();
    return res.status(200).json(Orders);
  };
}

export default OrderController;