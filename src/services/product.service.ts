import connection from '../models/connection';
import IProduct from '../interfaces/interfaces';
import ProductModel from '../models/product.models';

class ProductService {
  productModel: ProductModel;

  constructor() {
    this.productModel = new ProductModel(connection);
  }

  async getProducts(): Promise<IProduct[]> {
    const products = await this.productModel.getProducts();
    return products;
  }

  async insertProducts(product: IProduct) {
    const productCreate = await this.productModel.insertProducts(product);
    return productCreate;
  }
}

export default ProductService;