import { Controller, Post, Body, Get, Param } from '@nestjs/common';
import { ProductsService } from './products.service';

@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @Post()
  addProducts(
    @Body('title') prodTitle: string,
    @Body('desciption') prodDesc: string,
    @Body('price') prodPrice: number,
  ): any {
    const generatedId = this.productsService.insertProduct(
      prodTitle,
      prodDesc,
      prodPrice,
    );
    return { id: generatedId };
  }
  @Get()
  getAllProducts() {
    return this.productsService.getProducts();
  }
  @Get(':id')
  getProducts(@Param('id') prodId: string) {
    return this.productsService.getSingleProduct(prodId);
  }
}
