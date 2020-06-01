import { Injectable } from '@nestjs/common';
import { PRODUCTS } from './mock/products.mock';

@Injectable()
export class AppService {
  products = PRODUCTS;

  async getProducts() {
    return await this.products;
  }
}
