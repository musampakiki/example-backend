import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { Role } from '../entities/roles.entity';
import { User } from '../entities/users.entity';
import { UserRoles } from '../entities/user-roles.entity';
import { UserRolesController } from '../controllers/user-roles.controller';
import { UserRolesService } from '../services/user-roles.service';


@Module({
    imports: [SequelizeModule.forFeature([Role, User, UserRoles])],
    controllers: [UserRolesController],
    providers: [UserRolesService],
    exports: [UserRolesService]
})
export class UserRolesModule {}