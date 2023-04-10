import {Model, Table, Column, DataType, ForeignKey, BelongsTo} from "sequelize-typescript";
import {ApiProperty} from "@nestjs/swagger";
import {Cart} from "./cart.model";
import {Product} from "./product.model";



@Table({tableName: 'cart_products', createdAt: false, updatedAt: false})
export class CartProducts extends Model<CartProducts> {
    @ApiProperty({example: '1', description: 'unique id'})
    @Column({type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true})
    id: number;

    @ForeignKey(() => Cart)
    @ApiProperty({example: '1', description: 'cart id'})
    @Column({type: DataType.INTEGER})
    cartId: number;

    @ForeignKey(() => Product)
    @ApiProperty({example: '1', description: 'product id'})
    @Column({type: DataType.INTEGER})
    productId: number;

    @BelongsTo(() => Cart, )
    cart: Cart;

    @BelongsTo(() => Product, )
    product: Product;

}