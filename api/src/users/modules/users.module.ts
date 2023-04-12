import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { User } from '../entities/users.entity';
import { UserBan } from '../entities/user-ban.entity';
import { UserRoles } from '../entities/user-roles.entity';
import { UsersService } from '../services/users.service';
import { UsersController } from '../controllers/users.controller';

@Module({
    imports: [SequelizeModule.forFeature([User, UserBan, UserRoles])],
    controllers: [UsersController],
    providers: [UsersService],
})
export class UsersModule {}

