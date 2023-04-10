import {forwardRef, Module} from '@nestjs/common';
import { AuthController } from '../controllers/auth.controller';
import { AuthService } from '../services/auth.service';
import {UsersModule} from "../../users/modules/users.module";
import {JwtModule} from "@nestjs/jwt";
// import {MailModule} from "../mail/mail.module";

@Module({
  controllers: [AuthController],
  providers: [AuthService],
  imports: [
      forwardRef(() => UsersModule),
          JwtModule.register({
              secret: process.env.PRIVATE_KEY || 'SECRET',
              signOptions: {
                  expiresIn: '50m'
              }
          }),
      //MailModule
  ],
    exports: [
        AuthService,
        JwtModule
    ]
})
export class AuthModule {}
