import {Model, Table, Column, DataType, HasMany, BelongsToMany, BelongsTo} from "sequelize-typescript";
import {ApiProperty} from "@nestjs/swagger";
import {Product} from "./product.model";
import {AssortmentBrand} from "./assortment-brand.model";
import {Brand} from "./brand.model";


interface AssortmentCreationAttrs {
    name: string;
    image: string;
}

@Table({tableName: 'assortments'})
export class Assortment extends Model<Assortment, AssortmentCreationAttrs> {
    @ApiProperty({example: '1', description: 'unique id'})
    @Column({type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true})
    id: number;

    @ApiProperty({example: 'New assortment', description: 'Name assortment'})
    @Column({type: DataType.STRING, unique: true, allowNull: false})
    name: string;

    @ApiProperty({example: 'Image of assortment', description: 'Image of assortment'})
    @Column({type: DataType.STRING, defaultValue: 'Assortment.jpg'})
    image: string

    @HasMany(() => Product)
    products: Product[]

    @BelongsToMany(() => Brand, () => AssortmentBrand)
    brands: Brand[];

}