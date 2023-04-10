import { Module } from '@nestjs/common';
import { ProductsController } from '../controllers/products.controller';
import { ProductsService } from '../service/products.service';
import {SequelizeModule} from "@nestjs/sequelize";
import {Cart} from "../model/cart.model";
import {Product} from "../model/product.model"
import {CartProducts} from "../model/cart-products.model";
import {FilesModule} from "../../files/files.module";


@Module({
    controllers: [ProductsController],
    providers: [ProductsService],
    imports: [
        SequelizeModule.forFeature([Cart, CartProducts, Product]),
        FilesModule
    ],
    exports: [
        ProductsService
    ]
})

export class ProductsModule {}
