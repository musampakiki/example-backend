import {Model, Table, Column, DataType,} from "sequelize-typescript";
import {ApiProperty} from "@nestjs/swagger";



interface TestBrandCreationAttrs {
    name: string;
    image: string;
}

@Table({tableName: 'test_brands'})
export class TestBrand extends Model<TestBrand, TestBrandCreationAttrs> {
    @ApiProperty({example: '1', description: 'unique id'})
    @Column({type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true})
    id: number;

    @ApiProperty({example: 'New testBrand', description: 'Name testBrand'})
    @Column({type: DataType.STRING, unique: true, allowNull: false})
    name: string;

    @ApiProperty({example: 'Image of testBrand', description: 'Image of testBrand'})
    @Column({type: DataType.STRING, defaultValue: 'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQlmulUsEmPf0Xe8bPFQISgv7D7hO28Tlbmy-9rfeU4t9ASwuXA'})
    image: string
}