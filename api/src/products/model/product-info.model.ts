import {Model, Table, Column, DataType, BelongsTo, ForeignKey} from "sequelize-typescript";
import {ApiProperty} from "@nestjs/swagger";
import {Product} from "./product.model";
import {Brand} from "./brand.model";


interface ProductInfoCreationAttrs {
    title: string;
    description: string;
}

@Table({tableName: 'product_info'})
export class ProductInfo extends Model<ProductInfo, ProductInfoCreationAttrs> {
    @ApiProperty({example: '1', description: 'unique id'})
    @Column({type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true})
    id: number;

    @ApiProperty({example: 'New info', description: 'Name info'})
    @Column({type: DataType.STRING, unique: true, allowNull: false})
    title: string;

    @ApiProperty({example: 'Info description', description: 'Info description'})
    @Column({type: DataType.STRING, unique: true, allowNull: false})
    description: string;

    @ForeignKey(() => Product)
    @Column({type: DataType.INTEGER})
    productId: number;

    @BelongsTo(() => Product, )
    product: Product;

}