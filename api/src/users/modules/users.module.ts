import {forwardRef, Module} from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { User } from '../entities/users.entity';
import { UserBan } from '../entities/user-ban.entity';
import { UserRoles } from '../entities/user-roles.entity';
import { UserService } from '../services/users.service';
import { UserController } from '../controllers/users.controller';
import {RolesModule} from "./roles.module";
import {UserRolesModule} from "./user-roles.module";


@Module({
    imports: [SequelizeModule.forFeature([User, UserBan, UserRoles]),
        forwardRef(() =>RolesModule),
        forwardRef(() => UserRolesModule),
    ],
    controllers: [UserController],
    providers: [UserService],
    exports: [UserService]
})
export class UsersModule {}

