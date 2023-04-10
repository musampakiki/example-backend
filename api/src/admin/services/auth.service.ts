import {HttpException, HttpStatus, Injectable, UnauthorizedException} from '@nestjs/common';
import {CreateUserDto} from "../../users/dto/create.user.dto";
import {UsersService} from "../../users/services/users.service";
import {JwtService} from "@nestjs/jwt";
import *as bcrypt from "bcryptjs";
import {User} from "../../users/models/users.model";
//import {MailService} from "../../mail/mail.service";
import { InjectRepository } from "@nestjs/typeorm";


@Injectable()
export class AuthService {

    constructor(private userService: UsersService, private jwtService: JwtService
                //, private mailService: MailService
    // @InjectRepository(EmailVerificationEntity)
    // private readonly emailVerificationRepository: Repository<
    //     EmailVerificationEntity
    //     >,
    ) {
    }

    async login(userDto: CreateUserDto) {
        const user = await this.validateUser(userDto);
        return this.generateToken(user)
    }

    async registration(userDto: CreateUserDto) {
        const candidateEmail = await this.userService.getUserByEmail(userDto.email);
        const candidateUsername = await this.userService.getUserByUsername(userDto.username);

        if (candidateEmail || candidateUsername) {
            throw new HttpException('User with this email or login does not exist', HttpStatus.BAD_REQUEST)
        }

        const hashPassword = await bcrypt.hash(userDto.password, 5)
        const user = await this.userService.createUser({...userDto, password: hashPassword});

        // const tokenMail = Math.floor(1000 + Math.random() * 9000).toString();//mail confirm
        // console.log(tokenMail, 'tokenMail is this')
        // await this.mailService.sendUserConfirmation(user, tokenMail);
        // if (!tokenMail) {
        //     throw new HttpException('tokenEmail is empty', HttpStatus.BAD_REQUEST)
        // }
        // await this.mailService.sendUserConfirmation(user, tokenMail);

        return this.generateToken(user)
    }

    private async generateToken(user: User){
        const payload = {email: user.email, id: user.id, roles: user.roles};
        return {
            token: this.jwtService.sign(payload)
        }
    }

    private async validateUser(userDto: CreateUserDto) {
        const user = await this.userService.getUserByEmail(userDto.email);

        const passwordEquals = await bcrypt.compare(userDto.password, user.password);
        if (user && passwordEquals) {

            return user
        }
        throw new UnauthorizedException({message: 'Incorrect email or password'})
    }


    // async createEmailToken(email: string) {
    //     const emailVerification = await this.emailVerificationRepository.findOne({
    //         email,
    //     });
    //
    //     if (!emailVerification) {
    //         const emailVerificationToken = await this.emailVerificationRepository.save(
    //             {
    //                 email,
    //                 emailToken: (
    //                     Math.floor(Math.random() * 9000000) + 1000000
    //                 ).toString(),
    //                 timestamp: new Date(),
    //             },
    //         );
    //         return emailVerificationToken;
    //     }
    //     return false;
    // }
    //
    // async verifyEmail(token: string): Promise<boolean> {
    //     const emailVerif = await this.emailVerificationRepository.findOne({
    //         emailToken: token,
    //     });
    //     if (emailVerif && emailVerif.email) {
    //         const userFromDb = await this.usersService.findOneByEmail(
    //             emailVerif.email,
    //         );
    //         if (userFromDb) {
    //             await this.usersService.update(userFromDb._id, {
    //                 verified: true,
    //             });
    //
    //             await this.emailVerificationRepository.delete({ emailToken: token });
    //             return true;
    //         }
    //     } else {
    //         throw new HttpException('Invalid token', HttpStatus.FORBIDDEN);
    //     }
    // }
    //
    // async sendEmailVerification(email: string) {
    //     const repository = await this.emailVerificationRepository.findOne({
    //         email,
    //     });
    //
    //     if (repository && repository.emailToken) {
    //         const mailOptions = {
    //             from: '"Company" <' + process.env.EMAIL_USER + '>',
    //             to: email,
    //             subject: 'Verify Email',
    //             text: 'Verify Email',
    //             html: `Hi! <br><br> Thanks for your registration<br><br>
    //       <a href='${process.env.URL}:${process.env.PORT}/auth/email/verify/${repository.emailToken}'>Click here to activate your account</a>`,
    //         };
    //
    //         return await this.sendEmail(mailOptions);
    //     } else {
    //         throw new HttpException('User not found', HttpStatus.FORBIDDEN);
    //     }
    // }
    //
    // async sendEmail(mailOptions) {
    //     return await new Promise<{}>(async (resolve, reject) => {
    //         return await transporter.sendMail(mailOptions, async (error, info) => {
    //             if (error) {
    //                 Logger.log(
    //                     `Error while sending message: ${error}`,
    //                     'sendEmailVerification',
    //                 );
    //                 return reject(error);
    //             }
    //             Logger.log(`Send message: ${info.messageId}`, 'sendEmailVerification');
    //             resolve({ message: 'Successfully send email' });
    //         });
    //     });
}



