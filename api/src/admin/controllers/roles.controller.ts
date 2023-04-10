import {Body, Controller, Get, Param, Post} from '@nestjs/common';
import {CreateRoleDto} from "../dto/create.role.dto";
import {RolesService} from "../services/roles.service";
import {ApiOperation, ApiResponse, ApiTags} from "@nestjs/swagger";
import {Role} from "../models/roles.model";

@ApiTags('Roles')
@Controller('api/roles')
export class RolesController {

    constructor(private rolesService: RolesService) {}

    @ApiOperation({summary: 'Create role'})
    @ApiResponse({status: 200, type: Role})
    @Post()
    create(@Body() roleDto: CreateRoleDto){
        return this.rolesService.createRole(roleDto);
    }

    @ApiOperation({summary: 'Get roles'})
    @ApiResponse({status: 200, type: [Role]})
    @Get()
    getAll() {
        return this.rolesService.getAllRoles()
    }

    @ApiOperation({summary: 'One role'})
    @ApiResponse({status: 200, type: [Role]})
    @Get('/:value')
    getByValue(@Param('value') value: string) {
        return this.rolesService.getRoleByValue(value);
    }

}

