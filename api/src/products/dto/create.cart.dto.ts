import {ApiProperty} from "@nestjs/swagger";
import {IsNumber, IsString, Length} from "class-validator";


export class CreateCartDto {
    @ApiProperty({example: 'New value', description: 'Create new value'})
    @IsString({message: `Should be string`})
    @Length(1,36,{message: `Min 1 characters max 36 characters`})
    readonly value: string;

    @ApiProperty({example: '1', description: 'Product id'})
    @IsNumber({},{message: `Should be number id`})
    readonly productId: number;

    @ApiProperty({example: '1', description: 'User id'})
    @IsNumber({},{message: `Should be number id`})
    readonly userId: number;

}