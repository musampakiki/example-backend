import {Body, Controller, Get,  Post, } from '@nestjs/common';
import {ApiOperation, ApiResponse, ApiTags} from "@nestjs/swagger";
import {TestBrandService} from "../service/testBrand.service";
import {TestBrand} from "../model/testBrand";
import {CreateTestBrandDto} from "../dto/create.testBrand.dto";




@ApiTags('TestBrand')
@Controller('api/test-brands')
export class TestBrandController {

    constructor(private testBrandService: TestBrandService) {}

    @ApiOperation({summary: 'Create testBrand'})
    @Post()
    createTestBrand(@Body() dto: CreateTestBrandDto) {
        return this.testBrandService.create(dto)
    }

    @ApiOperation({summary: 'Get testBrands'})
    @ApiResponse({status: 200, type: [TestBrand]})
    @Get()
    getAll() {
        return this.testBrandService.getAllTestBrands()
    }

}

