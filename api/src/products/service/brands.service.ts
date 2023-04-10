import { Injectable } from '@nestjs/common';
import {InjectModel} from "@nestjs/sequelize";
import {Brand} from "../model/brand.model";
import {CreateBrandDto} from "../dto/create.brand.dto";


@Injectable()
export class BrandService {

    constructor(@InjectModel(Brand) private brandRepository: typeof Brand) {}

    async create(dto: CreateBrandDto) {
        return await this.brandRepository.create(dto);
    }

    async getAllBrands() {
        return await this.brandRepository.findAll()
    }

    async getBrandById(id: number){
        return await this.brandRepository.findOne({where: {id}});
    }
}
