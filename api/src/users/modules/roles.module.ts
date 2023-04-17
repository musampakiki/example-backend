import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { Role } from '../entities/roles.entity';
import { RoleController } from '../controllers/roles.controller';
import { RoleService } from '../services/roles.service';

@Module({
    imports: [SequelizeModule.forFeature([Role])],
    controllers: [RoleController],
    providers: [RoleService],
})
export class RolesModule {}