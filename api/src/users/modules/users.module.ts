import {forwardRef, Module} from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { User } from '../entities/users.entity';
import { UserRoles } from '../entities/user-roles.entity';
import { UserService } from '../services/users.service';
import { UserController } from '../controllers/users.controller';
import {RolesModule} from "./roles.module";
import {UserRolesModule} from "./user-roles.module";
import {Ban} from "../entities/ban.entity";


@Module({
    imports: [SequelizeModule.forFeature([User, Ban, UserRoles]),
        forwardRef(() =>RolesModule),
        forwardRef(() => UserRolesModule),
    ],
    controllers: [UserController],
    providers: [UserService],
    exports: [UserService]
})
export class UsersModule {}

