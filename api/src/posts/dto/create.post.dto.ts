import {ApiProperty} from "@nestjs/swagger";
import {IsNumber, IsString, Length} from "class-validator";


export class CreatePostDto {
    @ApiProperty({example: 'New title', description: 'Create new title'})
    @IsString({message: `Should be string`})
    @Length(1,36,{message: `Min 1 characters max 36 characters`})
    readonly title: string;

    @ApiProperty({example: 'New description', description: 'Create new description'})
    @IsString({message: `Should be string`})
    @Length(0,100,{message: `Min 0 characters max 100 characters`})
    readonly description: string;

    @ApiProperty({example: 'New content', description: 'Create new content'})
    @IsString({message: `Should be string`})
    @Length(1,7000,{message: `Min 1 characters max 7000 characters`})
    readonly content: string;

    @ApiProperty({example: '1', description: 'User id'})
    @IsNumber({},{message: `Should be number id`})
    readonly userId: number;

}