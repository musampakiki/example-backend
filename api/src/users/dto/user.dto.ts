import { ApiProperty } from '@nestjs/swagger';
import { IsBoolean, IsOptional, IsString, Length } from 'class-validator';

export class CreateUserDto {
    @ApiProperty({ example: 'login22', description: 'User login' })
    @IsString()
    readonly username: string;

    @ApiProperty({ example: 'Jerry', description: 'User firstname' })
    @IsOptional()
    @IsString()
    readonly firstname?: string;

    @ApiProperty({ example: 'Green', description: 'User lastname' })
    @IsOptional()
    @IsString()
    readonly lastname?: string;

    @ApiProperty({ example: 'example@gmail.com', description: 'User email' })
    @IsString()
    readonly email: string;

    @ApiProperty({ example: '123456', description: 'User password' })
    @IsString()
    @Length(6, 16)
    readonly password: string;
}

export class UpdateUserDto {
    @ApiProperty({ example: 'login22', description: 'User login' })
    @IsOptional()
    @IsString()
    readonly username?: string;

    @ApiProperty({ example: 'Jerry', description: 'User firstname' })
    @IsOptional()
    @IsString()
    readonly firstname?: string;

    @ApiProperty({ example: 'Green', description: 'User lastname' })
    @IsOptional()
    @IsString()
    readonly lastname?: string;

    @ApiProperty({ example: 'example@gmail.com', description: 'User email' })
    @IsOptional()
    @IsString()
    readonly email?: string;

    @ApiProperty({ example: '123456', description: 'User password' })
    @IsOptional()
    @IsString()
    @Length(6, 16)
    readonly password?: string;

    @ApiProperty({ example: 'true', description: 'User verified' })
    @IsOptional()
    @IsBoolean()
    readonly verified?: boolean;
}
