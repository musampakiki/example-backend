// import { MailerService } from "@nestjs-modules/mailer"
// import { Injectable } from '@nestjs/common';
// import { User } from "../users/users.model";
//
// @Injectable()
// export class MailService {
//     constructor(private mailerService: MailerService) {}
//
//     async sendUserConfirmation(user: User, tokenMail: string) {
//         const url = `google.com/auth/confirm?token=${tokenMail}`;//example.com
//
//         await this.mailerService.sendMail({
//             to: user.email,
//             // from: '"Support Team" <support@example.com>', // override default from
//             subject: 'Welcome to Nice App! Confirm your Email',
//             context: {
//                 name: user.name,
//                 url,
//             },
//         });
//     }
// }