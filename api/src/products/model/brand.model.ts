import {Model, Table, Column, DataType, HasMany, BelongsToMany, BelongsTo} from "sequelize-typescript";
import {ApiProperty} from "@nestjs/swagger";
import {Product} from "./product.model";
import {Assortment} from "./assortment.model";
import {AssortmentBrand} from "./assortment-brand.model";


interface BrandCreationAttrs {
    name: string;
    image: string;
}

@Table({tableName: 'brands'})
export class Brand extends Model<Brand, BrandCreationAttrs> {
    @ApiProperty({example: '1', description: 'unique id'})
    @Column({type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true})
    id: number;

    @ApiProperty({example: 'New brand', description: 'Name brand'})
    @Column({type: DataType.STRING, unique: true, allowNull: false})
    name: string;

    @ApiProperty({example: 'Image of brand', description: 'Image of brand'})
    @Column({type: DataType.STRING, defaultValue: 'Brand.jpg'})
    image: string

    @HasMany(() => Product)
    products: Product[];

    @BelongsToMany(() => Assortment, () => AssortmentBrand)
    assortments: Assortment[];

}