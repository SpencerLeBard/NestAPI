import { Injectable, NotFoundException } from '@nestjs/common';
import { Product } from './products.model';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class ProductsService {
  products: Product[] = [];

  constructor(@InjectModel('Product') private readonly productModel: Model<>) {}

  insertProduct(title: string, desc: string, price: number) {
    const prodId = Math.random().toString();
    const newProduct = new Product(prodId, title, desc, price);
    this.products.push(newProduct);
    return prodId;
  }

  getProducts() {
    //NOTE '...' spread operation - pulling all elements off products, adding to new array
    return [...this.products];
  }
  getSingleProduct(productId: string) {
    const product = this.products.find((prod) => prod.id == productId);
    if (!product) {
      throw new NotFoundException('Could not find product, sorry');
    }
    return { ...product };
  }
}
