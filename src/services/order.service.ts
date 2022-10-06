import connection from '../models/connection';
import { IOrder } from '../interfaces/interfaces';
import ProductModel from '../models/order.models';

class ProductService {
  productModel: ProductModel;

  constructor() {
    this.productModel = new ProductModel(connection);
  }

  async getOrders(): Promise<IOrder[]> {
    const orders = await this.productModel.getOrders();
    return orders;
  }
}

export default ProductService;