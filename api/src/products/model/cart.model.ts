import {Model, Table, Column, DataType, BelongsTo, HasMany, ForeignKey} from "sequelize-typescript";
import {ApiProperty} from "@nestjs/swagger";
import {User} from "../../users/models/users.model";
import {Product} from "./product.model";
import {CartProducts} from "./cart-products.model";


interface CartCreationAttrs {
   value: string
}

@Table({tableName: 'carts'})
export class Cart extends Model<Cart, CartCreationAttrs> {
    @ApiProperty({example: '1', description: 'unique id'})
    @Column({type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true})
    id: number

    @ApiProperty({example: 'New cart', description: 'Name cart'})
    @Column({type: DataType.STRING, unique: true, allowNull: false})
    value: string;

    @ForeignKey(() => User)
    @Column({type: DataType.INTEGER})
    userId: number;

    @BelongsTo(() => User, )
    user: User;

    @HasMany(() => Product)
    products: Product[];

    @HasMany(() => CartProducts)
    cartProducts: CartProducts[];

}