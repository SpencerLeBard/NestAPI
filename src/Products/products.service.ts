import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Product } from './products.model';

@Injectable()
export class ProductsService {
  products: Product[] = [];

  constructor(
    @InjectModel('Product') private readonly productModel: Model<Product>,
  ) {}

  async insertProduct(title: string, desc: string, price: number) {
    // NOTE BEFORE MONGOOSE const prodId = Math.random().toString();
    // NOTE BEFORE MONGOOSE const newProduct = new Product(prodId, title, desc, price);
    const newProduct = new this.productModel({
      title,
      description: desc,
      price: price,
    });
    // NOTE BEFORE MONGOOSE this.products.push(newProduct);
    const result = await newProduct.save();
    console.log(result);
    return 'prodId';
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
