import {ApiProperty} from "@nestjs/swagger";
import {IsEmail, IsString, Length} from "class-validator";


export class UpdateUserDto{
    @ApiProperty({example: 'login22', description: 'user login'})
    @IsString({message: `Should be string`})
    readonly username?: string;

    @ApiProperty({example: 'Juda', description: 'user name'})
    @IsString({message: `Should be string`})
    readonly firstname?: string;

    @ApiProperty({example: 'Juda', description: 'user name'})
    @IsString({message: `Should be string`})
    readonly lastname?: string;

    @ApiProperty({example: 'example@gmail.com', description: 'user email'})
    @IsString({message: `Should be string`})
    @IsEmail({},{message: `Incorrect email`})
    readonly email?: string;

    @ApiProperty({example: '123456', description: 'user password'})
    @IsString({message: `Should be string`})
    @Length(6,16,{message: `Min 6 characters max 16 characters`})
    readonly password?: string;
}