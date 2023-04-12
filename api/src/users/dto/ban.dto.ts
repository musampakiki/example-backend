import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNotEmpty, IsDate } from 'class-validator';

export class CreateBanDto {
    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    reason: string;

    @ApiProperty()
    @IsNotEmpty()
    @IsDate()
    expiredAt: Date;
}

export class UpdateBanDto {
    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    reason: string;

    @ApiProperty()
    @IsNotEmpty()
    @IsDate()
    expiredAt: Date;
}


/*
Функция CreateBanDto принимает параметры, необходимые для создания нового бана, включая userId -
идентификатор пользователя, reason - причина бана, isPermanent - является ли бан постоянным или
временным, и expirationDate - дата истечения срока бана.

Функция UpdateBanDto принимает параметры, необходимые для обновления существующего бана,
включая reason - новую причину бана, isPermanent - новый статус постоянного или временного
бана и expirationDate - новую дату истечения срока бана.*/
