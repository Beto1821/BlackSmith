import { Request, Response } from 'express';
import ProductService from '../services/product.service';

class ProductController {
  productService: ProductService;

  constructor() {
    this.productService = new ProductService();
  }

  getProducts = async (req: Request, res: Response) => {
    const products = await this.productService.getProducts();
    return res.status(200).json(products);
  };

  insertProducts = async (req: Request, res: Response) => {
    const { body } = req;
    const productCreate = await this.productService.insertProducts(body);
    return res.status(201).json(productCreate);
  };
}

export default ProductController;