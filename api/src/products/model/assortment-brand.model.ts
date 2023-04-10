import {Model, Table, Column, DataType, ForeignKey} from "sequelize-typescript";
import {ApiProperty} from "@nestjs/swagger";
import {Brand} from "./brand.model";
import {Assortment} from "./assortment.model";


@Table({tableName: 'assortment_brand', createdAt: false, updatedAt: false})
export class AssortmentBrand extends Model<AssortmentBrand> {
    @ApiProperty({example: '1', description: 'unique id'})
    @Column({type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true})
    id: number;

    @ForeignKey(() => Brand)
    @ApiProperty({example: '1', description: 'brand id'})
    @Column({type: DataType.INTEGER})
    brandId: number;

    @ForeignKey(() => Assortment)
    @ApiProperty({example: '1', description: 'assortment id'})
    @Column({type: DataType.INTEGER})
    assortmentId: number;



}