import { Pool, ResultSetHeader } from 'mysql2/promise';
import IProduct from '../interfaces/interfaces';

class ProductModel {
  connection: Pool;

  constructor(connection: Pool) {
    this.connection = connection;
  }

  async getProducts(): Promise<IProduct []> {
    const [allProducts] = await this.connection.execute(
      'SELECT * FROM Products',
    );
    return allProducts as IProduct[];
  }

  async insertProducts(product: IProduct): Promise<IProduct> {
    const { name, amount } = product;
    const [{ insertId }] = await this.connection.execute<ResultSetHeader>(
      'INSERT INTO Products (name, amount) VALUES (?,?)',
      [name, amount],
    );
    return { id: insertId, name, amount };
  }
}

export default ProductModel;