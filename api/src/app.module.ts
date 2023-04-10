import {Module} from "@nestjs/common";
import { SequelizeModule } from "@nestjs/sequelize"
import { UsersModule } from './users/modules/users.module';
import {ConfigModule} from "@nestjs/config";
import *as path from "path"
import { User } from "./users/models/users.model";
import { RolesModule } from './admin/modules/roles.module';
import {Role} from "./admin/models/roles.model";
import {UserRoles} from "./admin/dto/user-roles.model";
import { AuthModule } from './admin/modules/auth.module';
import { PostsModule } from './posts/modules/posts.module';
import {Post} from "./posts/model/posts.model";
import { FilesModule } from './files/files.module';
import {ServeStaticModule} from "@nestjs/serve-static";
import {Product} from "./products/model/product.model";
import {Cart} from "./products/model/cart.model";
import {CartModule} from "./products/modules/cart.module";
import {ProductsModule} from "./products/modules/products.module";
import {BrandModule} from "./products/modules/brands.module";
import {AssortmentsModule} from "./products/modules/assortments.module";
import {Assortment} from "./products/model/assortment.model";
import {Brand} from "./products/model/brand.model";
import {AssortmentBrand} from "./products/model/assortment-brand.model";
import {CartProducts} from "./products/model/cart-products.model";
import {ProductInfo} from "./products/model/product-info.model";
import {Rating} from "./products/model/rating.model";
import {TestBrand} from "./products/model/testBrand";
import {TestBrandModule} from "./products/modules/testBrands.module";
//import { MailService } from './admin/mail/mail.service';
//import { MailModule } from './admin/mail/mail.module';


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
        Post,
        Cart,
        Product,
        Assortment,
        Brand,
        AssortmentBrand,
        CartProducts,
        ProductInfo,
        Rating,
        TestBrand,
      ],
      autoLoadModels: true
    }),
        ProductsModule,
        CartModule,
        BrandModule,
        AssortmentsModule,
        ConfigModule,
        UsersModule,
        RolesModule,
        AuthModule,
        PostsModule,
        FilesModule,
        TestBrandModule,
        // MailModule,
  ],
  providers: [],
})

export class AppModule {}