import { Module } from '@nestjs/common';
import {SequelizeModule} from "@nestjs/sequelize";
import {BrandController} from "../controllers/brand.controller";
import {BrandService} from "../service/brands.service";
import {Assortment} from "../model/assortment.model";
import {Brand} from "../model/brand.model";
import {Product} from "../model/product.model";


@Module({
    controllers: [BrandController],
    providers: [BrandService],
    imports: [
        SequelizeModule.forFeature([Brand, Assortment, Product]),
    ],
    exports: [
        BrandService
    ]
})

export class BrandModule {}
