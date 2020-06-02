import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('/sample')
  getSample() {
    return 'This is sample';
  }

  @Get('/products')
  getProducts() {
    return this.appService.getProducts();
  }
}
