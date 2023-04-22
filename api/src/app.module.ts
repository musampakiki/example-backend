import {Module} from "@nestjs/common";
import { SequelizeModule } from "@nestjs/sequelize"
import {ConfigModule} from "@nestjs/config";
import *as path from "path"
import {ServeStaticModule} from "@nestjs/serve-static";
import { UsersModule } from './users/modules/users.module';
import { User } from "./users/entities/users.entity";
import { RolesModule } from './users/modules/roles.module';
import {Role} from "./users/entities/roles.entity";
import {UserRoles} from "./users/entities/user-roles.entity";
import { BanModule } from './users/modules/ban.module';
import {Ban} from "./users/entities/ban.entity";
import {UserBan} from "./users/entities/user-ban.entity";
import { UserRolesModule } from './users/modules/user-roles.module';



@Module({
  controllers: [],
  //providers:[MailService],
  imports: [
      ConfigModule.forRoot({
        envFilePath: `.${process.env.NODE_ENV}.env`,
        // isGlobal: true,
      }),
    ServeStaticModule.forRoot({
      rootPath: path.resolve(__dirname,'static'),
    }),
    SequelizeModule.forRoot({
      dialect: 'postgres',
      host: process.env.POSTGRES_HOST,
      port: Number(process.env.POSTGRES_PORT),
      username: process.env.POSTGRES_USER,
      password: process.env.POSTGRES_PASSWORD,
      database: process.env.POSTGRES_DB,
      models: [
        User,
        Role,
        UserRoles,
        Ban,
        UserBan,
      ],
      autoLoadModels: true
    }),
        ConfigModule,
        UsersModule,
        RolesModule,
        UserRolesModule,
        BanModule,
  ],
  providers: [],
})

export class AppModule {}