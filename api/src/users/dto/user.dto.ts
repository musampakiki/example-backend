import { ApiProperty } from '@nestjs/swagger';
import {IsOptional, IsString, IsEmail, IsNotEmpty, IsEnum, IsNumber} from 'class-validator';


enum Gender {
    MALE = 'male',
    FEMALE = 'female',
    OTHER = 'other'
}

export class CreateUserDto {
    @ApiProperty()
    @IsNotEmpty()
    @IsNumber()
    id: number;

    @ApiProperty({example: 'login22', description: 'user username'})
    @IsNotEmpty()
    @IsString({message: `Should be string`})
    readonly username: string;

    @IsString()
    @IsNotEmpty()
    @ApiProperty()
    readonly firstName: string;

    @IsString()
    @IsNotEmpty()
    @ApiProperty()
    readonly lastName: string;

    @IsEmail()
    @IsNotEmpty()
    @ApiProperty()
    readonly email: string;

    @IsString()
    @IsNotEmpty()
    @ApiProperty()
    readonly password: string;

    @IsString()
    @ApiProperty()
    @IsOptional()
    readonly avatar: string;

    @IsEnum(Gender)
    @ApiProperty({ enum: Gender, example: ['MALE', 'FEMALE', 'OTHER'] })
    readonly gender: Gender;

    @ApiProperty()
    readonly verified: boolean;

}

export class UpdateUserDto {
    @ApiProperty()
    @IsNotEmpty()
    @IsNumber()
    id: number;

    @ApiProperty({example: 'login22', description: 'user username'})
    @IsNotEmpty()
    @IsString({message: `Should be string`})
    readonly username?: string;

    @IsString()
    @IsOptional()
    @ApiProperty()
    readonly firstName?: string;

    @IsString()
    @IsOptional()
    @ApiProperty()
    readonly lastName?: string;

    @IsEmail()
    @IsOptional()
    @ApiProperty()
    readonly email?: string;

    @IsString()
    @IsOptional()
    @ApiProperty()
    readonly password?: string;

    @IsString()
    @IsOptional()
    @ApiProperty()
    readonly avatar?: string;

    @IsEnum(Gender)
    @IsOptional()
    @ApiProperty({ enum: Gender })
    readonly gender?: Gender;

    @ApiProperty()
    readonly verified?: boolean;
}
