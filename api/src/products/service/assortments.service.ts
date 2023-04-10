import { Injectable } from '@nestjs/common';
import {InjectModel} from "@nestjs/sequelize";
import {Assortment} from "../model/assortment.model";
import {CreateAssortmentDto} from "../dto/create.assortment.dto";


@Injectable()
export class AssortmentsService {

    constructor(@InjectModel(Assortment) private assortmentRepository: typeof Assortment) {}

    async createAssortment(dto: CreateAssortmentDto) {
        return await this.assortmentRepository.create(dto)
    }

    async getAllAssortments() {
        return await this.assortmentRepository.findAll()
    }

    async getAssortmentById(id: number){
        return await this.assortmentRepository.findOne({where: {id}});
    }
}
