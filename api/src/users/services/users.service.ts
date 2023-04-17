import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { User } from '../entities/users.entity';
import { CreateUserDto, UpdateUserDto } from '../dto/user.dto';

@Injectable()
export class UserService {
    constructor(
        @InjectModel(User)
        private readonly userModel: typeof User,
    ) {}

    async create(createUserDto: CreateUserDto): Promise<User> {
        const user = new User();
        user.id = createUserDto.id;
        user.firstName = createUserDto.firstName;
        user.lastName = createUserDto.lastName;
        user.email = createUserDto.email;
        user.password = createUserDto.password;
        user.avatar = createUserDto.avatar;
        // user.gender = createUserDto.gender;
        // user.roles = createUserDto.roles;

        return await user.save();
    }

    async getUserById(userId: number): Promise<User> {
        const user = await this.userModel.findByPk(userId);
        return user;
    }

    async update(id: number, updateUserDto: UpdateUserDto): Promise<User> {
        const user = await this.userModel.findByPk(id);
        user.firstName = updateUserDto.firstName;
        user.lastName = updateUserDto.lastName;
        user.email = updateUserDto.email;
        user.password = updateUserDto.password;
        user.avatar = updateUserDto.avatar;

        await user.save()
        return user;
    }

    async delete(id: number): Promise<void> {
        const user = await this.userModel.findByPk(id);
        await user.destroy();
    }

    async getAllUsers(): Promise<User[]> {
        const users = await this.userModel.findAll();
        return users;
    }
}
