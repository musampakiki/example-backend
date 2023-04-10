import {Body, Controller, Get, Post, UseGuards, UsePipes, Delete, Put, Param} from '@nestjs/common';
import {CreateUserDto} from "../dto/create.user.dto";
import {UsersService} from "../services/users.service";
import {ApiOperation, ApiResponse, ApiTags} from "@nestjs/swagger";
import {User} from "../models/users.model";
import {JwtAuthGuard} from "../../admin/services/jwt-auth.guard";
import {Roles} from "../../admin/Interface/roles-auth.decorator";
import {RolesAuthGuard} from "../../admin/services/roles-auth.guard";
import {AddRoleDto} from "../../admin/dto/add.role.dto";
import {BanUserDto} from "../dto/ban.user.dto";
import {ValidationPipe} from "../../admin/services/validation.pipe";
import {UpdateUserDto} from "../dto/update.dto";

@ApiTags('UsersPage')
@Controller('api/users')
export class UsersController {

    constructor(private usersService: UsersService) {}

    @ApiOperation({summary: 'Create user'})
    @ApiResponse({status: 200, type: User})
    // @UsePipes(ValidationPipe)
    //@Roles('ADMIN')
    //@UseGuards(RolesAuthGuard)
    @Post()
    create(@Body() userDto: CreateUserDto){
        return this.usersService.createUser(userDto);
    }

    @ApiOperation({summary: 'Get users'})
    @ApiResponse({status: 200, type: [User]})
    @UseGuards(JwtAuthGuard)
    @Roles('ADMIN')
    @UseGuards(RolesAuthGuard)
    @Get()
    getAll() {
        return this.usersService.getAllUsers()
    }

    @ApiOperation({summary: 'Issue a role'})
    @ApiResponse({status: 200})
    @UseGuards(JwtAuthGuard)
    @Roles('ADMIN')
    @UseGuards(RolesAuthGuard)
    @Post('/role')
    addRole(@Body() dto: AddRoleDto) {
        return this.usersService.addRole(dto)
    }

    @ApiOperation({summary: 'Issue a bun'})
    @ApiResponse({status: 200})
    @UseGuards(JwtAuthGuard)
    @Roles('ADMIN')
    @UseGuards(RolesAuthGuard)
    @Post('/ban')
    ban(@Body() dto: BanUserDto) {
        return this.usersService.ban(dto)
    }

    @ApiOperation({summary: 'Get user'})
    @ApiResponse({ status: 200, description: 'Get user' })
    @UseGuards(JwtAuthGuard)
    @Roles('ADMIN', 'USER')
    @UseGuards(RolesAuthGuard)
    @Get(':id')
    async getById(@Param('id') id: number) {
        return this.usersService.getUserById(id);
    }

    @ApiOperation({summary: 'Delete users'})
    @ApiResponse({ status: 200, description: 'Deleted user' })
    @UseGuards(JwtAuthGuard)
    @Roles('ADMIN','USER')
    @UseGuards(RolesAuthGuard)
    @Delete(':id')
    async deleteById(@Param('id') id: number) {
        return this.usersService.deleteUserById(id);
    }

    @ApiOperation({summary: 'Put users'})
    @ApiResponse({ status: 200, description: 'Put users' })
    @UseGuards(JwtAuthGuard)
    @Roles('ADMIN','USER')
    @UseGuards(RolesAuthGuard)
    @Put(':id')
    async updateUser(@Param('id') id: number, @Body() dto: UpdateUserDto) {
        return this.usersService.updateUserById(id, dto);
    }
 }
