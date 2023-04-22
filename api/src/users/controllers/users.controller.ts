import { Controller, Get, Post, Put, Delete, Param, Body } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { User } from '../entities/users.entity';
import { UserService } from '../services/users.service';
import { CreateUserDto, UpdateUserDto } from '../dto/user.dto';
import {AddRoleDto} from "../dto/add.role.dto";

@ApiTags('users')
@Controller('api/users')
export class UserController {
    constructor(private readonly userService: UserService) {}

    @ApiOperation({ summary: 'Get all users' })
    @ApiResponse({ status: 200, description: 'Return all users' })
    @Get()
    async getAllUsers(): Promise<User[]> {
        return  await this.userService.getAllUsers();
    }

    @ApiOperation({ summary: 'Get user by ID' })
    @ApiResponse({ status: 200, description: 'Return user by ID' })
    @ApiResponse({ status: 404, description: 'User not found' })
    @Get(':id')
    async getUserById(@Param('id') id: number): Promise<User> {
        return await this.userService.getUserById(id);
    }

    @ApiOperation({ summary: 'Create user' })
    @ApiResponse({ status: 201, description: 'User successfully created' })
    @Post()
    async createUser(@Body() userData: CreateUserDto): Promise<User> {
        return await this.userService.create(userData);
    }

    @ApiOperation({summary: 'Issue a role'})
    @ApiResponse({status: 200})
    // @UseGuards(JwtAuthGuard)
    // @Roles('ADMIN')
    // @UseGuards(RolesAuthGuard)
    @Post('/role')
    addRole(@Body() addRoleDto: AddRoleDto) {
        return this.userService.addRole(addRoleDto)
    }

    @ApiOperation({ summary: 'Update user' })
    @ApiResponse({ status: 200, description: 'User successfully updated' })
    @ApiResponse({ status: 404, description: 'User not found' })
    @Put(':id')
    async updateUser(@Param('id') id: number, @Body() userData: UpdateUserDto): Promise<User> {
        return await this.userService.update(id, userData);
    }

    @ApiOperation({ summary: 'Delete user' })
    @ApiResponse({ status: 204, description: 'User successfully deleted' })
    @ApiResponse({ status: 404, description: 'User not found' })
    @Delete(':id')
    async deleteUser(@Param('id') id: number): Promise<void> {
        await this.userService.delete(id);
    }
}
