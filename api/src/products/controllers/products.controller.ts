import {Body, Controller, Get, Param, Post, UploadedFile, UseInterceptors} from '@nestjs/common';
import {FileInterceptor} from "@nestjs/platform-express";
import {ApiOperation, ApiResponse} from "@nestjs/swagger";
import {CreateProductDto} from "../dto/create.product.dto";
import {ProductsService} from "../service/products.service";
import {Product} from "../model/product.model";
import {Assortment} from "../model/assortment.model";


@Controller('api/products')
export class ProductsController {

    constructor(private productsService: ProductsService) {
    }

    @ApiOperation({summary: 'Create new product'})
    @ApiResponse({status: 200, type: Product})
    @Post()
    createProduct(@Body() dto: CreateProductDto) {
        return this.productsService.create(dto)
    }

    @ApiOperation({summary: 'Get products'})
    @ApiResponse({status: 200, type: [Product]})
    @Get()
    getAll() {
        return this.productsService.getAllProducts()
    }

    @ApiOperation({summary: 'One product'})
    @ApiResponse({status: 200, type: [Product]})
    @Get('/:id')
    getById(@Param('id') id: number) {
        return this.productsService.getProductById(id);
    }

}
