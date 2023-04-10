import { Module } from '@nestjs/common';
import {SequelizeModule} from "@nestjs/sequelize";
import {TestBrandController} from "../controllers/testBrand.controller";
import {TestBrandService} from "../service/testBrand.service";
import {TestBrand} from "../model/testBrand";




@Module({
    controllers: [TestBrandController],
    providers: [TestBrandService],
    imports: [
        SequelizeModule.forFeature([TestBrand]),
    ],
    exports: [
        TestBrandService
    ]
})

export class TestBrandModule {}
