import { Controller, Post, Body, Param } from '@nestjs/common';
import { AddRoleDto } from '../dto/add.role.dto';
import { UserRolesService } from '../services/user-roles.service';

@Controller('users/:userId/roles')
export class UserRolesController {
    constructor(private userRolesService: UserRolesService) {}

    @Post()
    async addRoleToUser(
        @Body() addRoleDto: AddRoleDto,
        @Param('userId') userId: number,
    ) {
        const { roleId } = addRoleDto;
        return await this.userRolesService.addUserRole({userId, roleId});
    }
}