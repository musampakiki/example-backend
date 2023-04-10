import { Module } from '@nestjs/common';
import { RolesController } from '../controllers/roles.controller';
import { RolesService } from '../services/roles.service';
import {SequelizeModule} from "@nestjs/sequelize";
import {Role} from "../models/roles.model";
import {User} from "../../users/models/users.model";
import {UserRoles} from "../dto/user-roles.model";

@Module({
  controllers: [RolesController],
  providers: [RolesService],
  imports: [
    SequelizeModule.forFeature([Role, User, UserRoles])
  ],
  exports: [
      RolesService
  ]
})
export class RolesModule {}
