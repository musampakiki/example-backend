import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { Role } from '../entities/roles.entity';
import { User } from '../entities/users.entity';
import { UserRoles } from '../entities/user-roles.entity';
import { RoleController } from '../controllers/roles.controller';
import { RoleService } from '../services/roles.service';


@Module({
    imports: [SequelizeModule.forFeature([Role, User, UserRoles])],
    controllers: [RoleController],
    providers: [RoleService],
    exports: [RoleService]
})
export class RolesModule {}