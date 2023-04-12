import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Op } from 'sequelize';
import { CreateUserDto, UpdateUserDto } from '../dto/user.dto';
import { User } from '../entities/users.entity';

@Injectable()
export class UserService {
    constructor(
        @InjectModel(User)
        private userModel: typeof User,
    ) {}

    async createUser(createUserDto: CreateUserDto): Promise<User> {
        const createdUser = await this.userModel.create(createUserDto);
        return createdUser;
    }

    async getUserById(id: number): Promise<User> {
        const user = await this.userModel.findOne({ where: { id } });
        return user;
    }

    async getUsers(): Promise<User[]> {
        const users = await this.userModel.findAll();
        return users;
    }

    async updateUser(id: number, updateUserDto: UpdateUserDto): Promise<User> {
        const [numOfAffectedRows, [updatedUser]] = await this.userModel.update(
            updateUserDto,
            { returning: true, where: { id } },
        );
        if (numOfAffectedRows === 0) {
            return null;
        }
        return updatedUser;
    }

    async deleteUser(id: number): Promise<void> {
        const deletedRows = await this.userModel.destroy({ where: { id } });
        if (deletedRows === 0) {
            throw new Error(`User with ID "${id}" not found.`);
        }
    }

    async getBannedUsers(): Promise<User[]> {
        const users = await this.userModel.findAll({ where: { banned: true } });
        return users;
    }

    async getUnverifiedUsers(): Promise<User[]> {
        const users = await this.userModel.findAll({ where: { verified: false } });
        return users;
    }

    async searchUsersByUsername(username: string): Promise<User[]> {
        const users = await this.userModel.findAll({
            where: {
                username: {
                    [Op.like]: `%${username}%`,
                },
            },
        });
        return users;
    }
}
