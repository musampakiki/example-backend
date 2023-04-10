import { Module } from '@nestjs/common';
import {SequelizeModule} from "@nestjs/sequelize";
import {Assortment} from "../model/assortment.model";
import {AssortmentController} from "../controllers/assortment.controller";
import {AssortmentsService} from "../service/assortments.service";
import {Brand} from "../model/brand.model";
import {Product} from "../model/product.model";
import {FilesModule} from "../../files/files.module";


@Module({
    controllers: [AssortmentController],
    providers: [AssortmentsService],
    imports: [
        SequelizeModule.forFeature([Brand, Assortment, Product]),
        FilesModule
    ],
    exports: [
        AssortmentsService
    ]
})

export class AssortmentsModule {}
