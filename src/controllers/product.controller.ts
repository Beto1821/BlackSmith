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
}

export default ProductController;