import {ApiProperty} from "@nestjs/swagger";
import {IsString, Length} from "class-validator";


export class CreateBrandDto {
    @ApiProperty({example: 'New name', description: 'Create new name'})
    @IsString({message: `Should be string`})
    @Length(1,36,{message: `Min 1 characters max 36 characters`})
    readonly name: string;

    @ApiProperty({example: 'image', description: 'image'})
    @IsString({message: `Should be string`})
    readonly image: string;
}