import {Controller, Post , Body} from '@nestjs/common'
import {ProductsService} from './products.service';

@Controller('products')
export class ProductsController {
  constructor(productsService: ProductsService){
  }

  @Post()
  addProducts(
  @Body('title') prodTitle: string , 
  @Body('desciption') prodDesc: string , 
  @Body('price') prodPrice: number): any {
      this.productsService.insertProduct(prodTitle, prodDesc, prodPrice);
  }
}