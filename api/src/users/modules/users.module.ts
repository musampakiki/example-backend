import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { User } from '../entities/users.entity';
import { UserBan } from '../entities/user-ban.entity';
import { UserRoles } from '../entities/user-roles.entity';
import { UserService } from '../services/users.service';
import { UserController } from '../controllers/users.controller';

@Module({
    imports: [SequelizeModule.forFeature([User, UserBan, UserRoles])],
    controllers: [UserController],
    providers: [UserService],
})
export class UsersModule {}

