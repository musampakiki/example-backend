import {Body, Controller, Get, Param, Post} from '@nestjs/common';
import {ApiOperation, ApiResponse, ApiTags} from "@nestjs/swagger";
import {BrandService} from "../service/brands.service";
import {Brand} from "../model/brand.model";
import {CreateBrandDto} from "../dto/create.brand.dto";


@ApiTags('Brand')
@Controller('api/brands')
export class BrandController {

    constructor(private brandService: BrandService) {}

    @ApiOperation({summary: 'Create brand'})
    @Post()
    createBrand(@Body() dto: CreateBrandDto) {
        return this.brandService.create(dto)
    }

    @ApiOperation({summary: 'Get brands'})
    @ApiResponse({status: 200, type: [Brand]})
    @Get()
    getAll() {
        return this.brandService.getAllBrands()
    }

    @ApiOperation({summary: 'One brand'})
    @ApiResponse({status: 200, type: [Brand]})
    @Get('/:id')
    getById(@Param('id') id: number) {
        return this.brandService.getBrandById(id);
    }

}

