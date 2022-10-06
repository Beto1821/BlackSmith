import { Pool } from 'mysql2/promise';
import { IOrder } from '../interfaces/interfaces';

class OrderModel {
  connection: Pool;

  constructor(connection: Pool) {
    this.connection = connection;
  }

  async getOrders(): Promise<IOrder[]> {
    const [orders] = await this.connection.execute(
      `SELECT
            o.id, o.userId, JSON_ARRAYAGG(p.id) AS productsIds
          FROM
            Trybesmith.Orders as o
              INNER JOIN 
            Trybesmith.Products AS p
          ON o.id = p.orderId
          GROUP BY o.id
          ORDER BY o.userId;
        `,
    );
    return orders as IOrder[];
  }
}
export default OrderModel;