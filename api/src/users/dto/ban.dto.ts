import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNotEmpty, IsDate, IsNumber } from 'class-validator';

export class CreateBanDto {
    @ApiProperty()
    @IsNotEmpty()
    @IsNumber()
    userId: number;

    @IsNotEmpty()
    isBan: boolean;

    @ApiProperty()
    @IsString()
    reason: string;

    @IsNumber()
    duration: number;

    @ApiProperty()
    @IsDate()
    expiredAt: Date;
}

export class UpdateBanDto {
    @IsNotEmpty()
    isBan: boolean;

    @ApiProperty()
    @IsString()
    reason: string;

    @IsNumber()
    duration: number;

    @ApiProperty()
    @IsDate()
    expiredAt: Date;
}

