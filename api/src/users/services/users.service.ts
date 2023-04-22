import { Injectable, NotFoundException, HttpException, HttpStatus } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { User } from '../entities/users.entity';
import { CreateUserDto, UpdateUserDto } from '../dto/user.dto';
import {RoleService} from './roles.service'
import {AddRoleDto} from "../dto/add.role.dto";
import {UserRolesService} from "./user-roles.service";
import {UserRoles} from "../entities/user-roles.entity";

@Injectable()
export class UserService {
    constructor(
        @InjectModel(User)
        private userModel: typeof User,
        private roleService: RoleService ,
        private userRolesService: UserRolesService
    ) {}

    async create(createUserDto: CreateUserDto): Promise<User> {
        const user = await this.userModel.create(createUserDto);
        const role = await this.roleService.getRoleByValue('USER');
        if (!role) {
            throw new NotFoundException('Role not found');
        }

        const userRoleData: Partial<UserRoles> = {
            userId: user.id,
            roleId: role.id,
            roleName: role.value,
        };

        await this.userRolesService.addUserRole(userRoleData);

        user.roles = [role];
        return user;
    }

    async addRole(addRoleDto: AddRoleDto) {
        const user = await this.userModel.findByPk(addRoleDto.userId);
        const role = await this.roleService.getRoleByValue(addRoleDto.roleName);
        if (role && user) {
            await user.$add('role', role.id);
            return addRoleDto;
        }
        throw new HttpException('User or role is not found', HttpStatus.NOT_FOUND)
    }



    async getUserById(userId: number): Promise<User> {
        if (!userId) {
            throw new NotFoundException("User not found");
        }
        return await this.userModel.findByPk(userId);
    }

    async update(id: number, updateUserDto: UpdateUserDto): Promise<User> {
        const user = await this.userModel.findByPk(id);
        user.username = updateUserDto.username;
        user.firstName = updateUserDto.firstName;
        user.lastName = updateUserDto.lastName;
        user.email = updateUserDto.email;
        user.password = updateUserDto.password;
        user.avatar = updateUserDto.avatar;
        user.verified = updateUserDto.verified;


        await user.save()
        return user;
    }

    async delete(id: number): Promise<void> {
        const user = await this.userModel.findByPk(id);
        await user.destroy();
    }

    async getAllUsers(): Promise<User[]> {
        return await this.userModel.findAll();
    }
}
