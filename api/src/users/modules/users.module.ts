import {forwardRef, Module} from '@nestjs/common';
import { UsersController } from '../controllers/users.controller';
import { UsersService } from '../services/users.service';
import {SequelizeModule} from "@nestjs/sequelize";
import {User} from "../models/users.model";
import {Role} from "../../admin/models/roles.model";
import {UserRoles} from "../../admin/dto/user-roles.model";
import {RolesModule} from "../../admin/modules/roles.module";
import {AuthModule} from "../../admin/modules/auth.module";
import {Post} from "../../posts/model/posts.model";
import {Rating} from "../../products/model/rating.model";
import {Cart} from "../../products/model/cart.model";


@Module({
  controllers: [UsersController],
  providers: [UsersService],
  imports: [
      SequelizeModule.forFeature([User, Role, UserRoles, Post, Rating, Cart]),
      RolesModule,
      forwardRef(() => AuthModule)
  ],
    exports: [
        UsersService
    ]
})
export class UsersModule {}
