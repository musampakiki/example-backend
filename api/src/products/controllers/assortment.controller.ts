import {Body, Controller, Get, Param, Post} from '@nestjs/common';
import {ApiOperation, ApiResponse, ApiTags} from "@nestjs/swagger";
import {Assortment} from "../model/assortment.model";
import {AssortmentsService} from "../service/assortments.service";
import {CreateAssortmentDto} from "../dto/create.assortment.dto";


@ApiTags('Assortment')
@Controller('api/assortments')
export class AssortmentController {

    constructor(private assortmentsService: AssortmentsService) {}

    @ApiOperation({summary: 'Create new assortment'})
    @ApiResponse({status: 200, type: Assortment})
    @Post()
    createAssortment(@Body() dto: CreateAssortmentDto) {
        return this.assortmentsService.createAssortment(dto)
    }

    @ApiOperation({summary: 'Get assortments'})
    @ApiResponse({status: 200, type: [Assortment]})
    @Get()
    getAll() {
        return this.assortmentsService.getAllAssortments()
    }

    @ApiOperation({summary: 'One assortment'})
    @ApiResponse({status: 200, type: [Assortment]})
    @Get('/:id')
    getById(@Param('id') id: number) {
        return this.assortmentsService.getAssortmentById(id);
    }

}

