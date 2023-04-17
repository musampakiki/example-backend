import { ApiProperty } from '@nestjs/swagger';
import {IsOptional, IsString, IsEmail, IsNotEmpty, IsEnum, ValidateNested, IsArray, IsNumber} from 'class-validator';
import { Type } from 'class-transformer';
import { CreateRoleDto } from './role.dto';
import { CreateBanDto } from './ban.dto';


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
    readonly avatar?: string;

    @IsEnum(Gender)
    @ApiProperty({ enum: Gender, example: ['MALE', 'FEMALE', 'OTHER'] })
    readonly gender: Gender;

    @ValidateNested()
    @Type(() => CreateRoleDto)
    @IsArray()
    @ApiProperty({ type: [CreateRoleDto] })
    readonly roles: CreateRoleDto[];

    @ValidateNested()
    @Type(() => CreateBanDto)
    @ApiProperty({ type: CreateBanDto })
    readonly ban: CreateBanDto;
}

export class UpdateUserDto {
    @ApiProperty()
    @IsNotEmpty()
    @IsNumber()
    id: number;

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

    @ValidateNested()
    @Type(() => CreateRoleDto)
    @IsOptional()
    @IsArray()
    @ApiProperty({ type: [CreateRoleDto] })
    readonly roles?: CreateRoleDto[];

    @ValidateNested()
    @Type(() => CreateBanDto)
    @IsOptional()
    @ApiProperty({ type: CreateBanDto })
    readonly ban?: CreateBanDto;
}
