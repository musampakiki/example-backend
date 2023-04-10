import { Injectable } from '@nestjs/common';
import {InjectModel} from "@nestjs/sequelize";
import {CreateTestBrandDto} from "../dto/create.testBrand.dto";
import {TestBrand} from "../model/testBrand";




@Injectable()
export class TestBrandService {

    constructor(@InjectModel(TestBrand) private testBrandRepository: typeof TestBrand) {}


        async create(dto: CreateTestBrandDto) {
            return await this.testBrandRepository.create(dto);
    }


    async getAllTestBrands() {
        return await this.testBrandRepository.findAll()
    }

}
