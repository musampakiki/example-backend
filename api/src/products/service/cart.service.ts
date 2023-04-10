import { Injectable } from '@nestjs/common';
import {CreateCartDto} from "../dto/create.cart.dto";
import {InjectModel} from "@nestjs/sequelize";
import {Cart} from "../model/cart.model";


@Injectable()
export class CartService {

    constructor(@InjectModel(Cart) private cartRepository: typeof Cart) {}

    async createCart(dto: CreateCartDto) {
        return await this.cartRepository.create(dto);
    }

    async getAllCarts() {
        return await this.cartRepository.findAll()
    }

    async getCartById(id: number){
        return await this.cartRepository.findOne({where: {id}});
    }
}
