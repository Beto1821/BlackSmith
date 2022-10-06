import connection from '../models/connection';
import IProduct from '../interfaces/interfaces';
import ProductModel from '../models/product.model';

class ProductService {
  productModel: ProductModel;

  constructor() {
    this.productModel = new ProductModel(connection);
  }

  async getProducts(): Promise<IProduct[]> {
    const products = await this.productModel.getAll();
    return products;
  }
}

export default ProductService;