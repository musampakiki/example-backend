import { Module } from '@nestjs/common';
import { CartController } from '../controllers/cart.controller';
import { CartService } from '../service/cart.service';
import {SequelizeModule} from "@nestjs/sequelize";
import {Cart} from "../model/cart.model";
import {User} from "../../users/models/users.model";
import {Product} from "../model/product.model"



@Module({
    controllers: [CartController],
    providers: [CartService],
    imports: [
        SequelizeModule.forFeature([Cart, User, Product])
    ],
    exports: [
        CartService
    ]
})

export class CartModule {}
