import { Injectable } from '@nestjs/common';
import {CreateProductDto} from "../dto/create.product.dto";
import {InjectModel} from "@nestjs/sequelize";
import {Product} from "../model/product.model";


@Injectable()
export class ProductsService {

    constructor(@InjectModel(Product) private productRepository: typeof Product) {}

    async create(dto: CreateProductDto) {
        return await this.productRepository.create(dto)
    }

    async getAllProducts() {
        return await this.productRepository.findAll()
    }

    async getProductById(id: number){
        return await this.productRepository.findOne({where: {id}});
    }




}
