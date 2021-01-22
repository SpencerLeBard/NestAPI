import { Controller, Get } from '@nestjs/common';
import { domain } from 'process';
import { AppService } from './app.service';

// NOTE your-domain.com/products
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  //NOTE argument would be Get('products)
  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}
