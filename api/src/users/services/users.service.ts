import {HttpException, HttpStatus, Injectable} from '@nestjs/common';
import {User} from "../models/users.model";
import {InjectModel} from "@nestjs/sequelize";
import {CreateUserDto} from "../dto/create.user.dto";
import {RolesService} from "../../admin/services/roles.service";
import {AddRoleDto} from "../../admin/dto/add.role.dto";
import {BanUserDto} from "../dto/ban.user.dto";
import {UpdateUserDto} from "../dto/update.dto";

@Injectable()
export class UsersService {

    constructor(@InjectModel(User) private userRepository: typeof User,
                private roleService: RolesService) {}

    async createUser(dto: CreateUserDto) {
        const user = await this.userRepository.create(dto);
        const role = await this.roleService.getRoleByValue('USER');
        await user.$set('roles', [role.id]);
        user.roles = [role]
        return user
    }
    async getAllUsers() {
        const users = await this.userRepository.findAll({include: {all: true}})
        return users
    }

    async getUserByEmail(email: string) {
        const user = await this.userRepository.findOne({where: {email}, include: {all: true}});
        return user
    }

    async getUserByUsername(username: string) {
        const user = await this.userRepository.findOne({where: {username}, include: {all: true}});
        return user
    }

    async getUserById(id: number) {
        const user = await this.userRepository.findOne({where: {id}, include: {all: true}});
        return user
    }

    async addRole(dto: AddRoleDto) {
        const user = await this.userRepository.findByPk(dto.userId);
        const role = await this.roleService.getRoleByValue(dto.value);
        if (role && user) {
            await user.$add('role', role.id);
            return dto;
        }
        throw new HttpException('User or role is not found', HttpStatus.NOT_FOUND)
    }

    async ban(dto: BanUserDto) {
        const user = await this.userRepository.findByPk(dto.userId);
        if (!user) {
            throw new HttpException('User is not found', HttpStatus.NOT_FOUND)
        }
        user.banned = true;
        user.banReason = dto.banReason;
        await user.save();
        return user;
    }

    async updateUserById(id, dto: UpdateUserDto) {
        const user = await this.userRepository.findOne({where: {id}, include: {all: true}});

        if (user === undefined || user === null) {
            throw new HttpException('User does not exists', HttpStatus.BAD_REQUEST);
        }

        return user.update(dto);
    }

    async deleteUserById(id: number) {
        const user = await this.userRepository.findOne({where: {id}, include: {all: true}});

        if (user === undefined || user === null) {
            throw new HttpException('User does not exists', HttpStatus.BAD_REQUEST);
        }

        return user.destroy();
    }

    // async deleteAllUsers() {
    //     return await this.userRepository.destroy({truncate: true});
    // }

}
