import {ApiProperty} from "@nestjs/swagger";
import {IsNumber, IsString, Length} from "class-validator";


export class CreateProductDto {
    @ApiProperty({example: 'New title', description: 'Create new title'})
    @IsString({message: `Should be string`})
    @Length(1,36,{message: `Min 1 characters max 36 characters`})
    readonly title: string;

    @ApiProperty({example: '5000', description: 'Create new price'})
    @IsNumber({},{message: `Should be number price`})
    readonly price: number

    @ApiProperty({example: '5', description: 'Create new rating'})
    @IsNumber({},{message: `Should be number rating`})
    readonly rating: number

    @ApiProperty({example: 'image', description: 'image'})
    @IsString({message: `Should be string`})
    readonly image: string;

    @ApiProperty({example: '1', description: 'Brand id'})
    @IsNumber({},{message: `Should be number id`})
    readonly brandId: number;

    @ApiProperty({example: '1', description: 'Assortment id'})
    @IsNumber({},{message: `Should be number id`})
    readonly assortmentId: number;

}