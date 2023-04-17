import { Controller, Get, Post, Put, Delete, Param, Body } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { RoleService } from '../services/roles.service';
import { CreateRoleDto, UpdateRoleDto } from '../dto/role.dto';
import { Role } from '../entities/roles.entity';

@ApiTags('roles')
@Controller('roles')
export class RoleController {
    constructor(private readonly roleService: RoleService) {}

    @ApiOperation({ summary: 'Create role' })
    @ApiResponse({ status: 201, description: 'The role has been successfully created.', type: Role })
    @Post()
    async createRole(@Body() roleData: CreateRoleDto): Promise<Role> {
        return await this.roleService.create(roleData);
    }

    @ApiOperation({ summary: 'Get all roles' })
    @ApiResponse({ status: 200, description: 'Return all roles.', type: [Role] })
    @Get()
    async getAllRoles(): Promise<Role[]> {
        return await this.roleService.getAllRoles();
    }

    @ApiOperation({ summary: 'Get role by id' })
    @ApiResponse({ status: 200, description: 'Return a single role.', type: Role })
    @ApiResponse({ status: 404, description: 'Role not found.' })
    @Get(':id')
    async getRoleById(@Param('id') roleId: number): Promise<Role> {
        return await this.roleService.getRoleById(roleId);
    }

    @ApiOperation({ summary: 'Update role by id' })
    @ApiResponse({ status: 200, description: 'The role has been successfully updated.', type: Role })
    @ApiResponse({ status: 404, description: 'Role not found.' })
    @Put(':id')
    async updateRole(@Param('id') roleId: number, @Body() roleData: UpdateRoleDto): Promise<Role> {
        return await this.roleService.update(roleId, roleData);
    }

    @ApiOperation({ summary: 'Delete role by id' })
    @ApiResponse({ status: 204, description: 'The role has been successfully deleted.' })
    @ApiResponse({ status: 404, description: 'Role not found.' })
    @Delete(':id')
    async deleteRole(@Param('id') roleId: number): Promise<void> {
        await this.roleService.delete(roleId);
    }
}
