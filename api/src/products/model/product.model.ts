import {Model, Table, Column, DataType, BelongsTo, ForeignKey, HasMany} from "sequelize-typescript";
import {ApiProperty} from "@nestjs/swagger";
import {Cart} from "./cart.model";
import {Assortment} from "./assortment.model";
import {Brand} from "./brand.model";
import {Rating} from "./rating.model";
import {CartProducts} from "./cart-products.model";
import {ProductInfo} from "./product-info.model";



interface ProductCreationAttrs {
    title: string;
    price: number;
    rating: number;
    image: string;
}

@Table({tableName: 'products'})
export class Product extends Model<Product, ProductCreationAttrs> {
    @ApiProperty({example: '1', description: 'unique id'})
    @Column({type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true})
    id: number;

    @ApiProperty({example: 'New product', description: 'Name product'})
    @Column({type: DataType.STRING, unique: true, allowNull: false})
    title: string;

    @ApiProperty({example: 'Price of product', description: 'Price of product'})
    @Column({type: DataType.INTEGER, allowNull: false})
    price: number;

    @ApiProperty({example: 'Rating of product', description: 'Rating of product'})
    @Column({type: DataType.INTEGER, defaultValue: 0})
    rating: number;

    @ApiProperty({example: 'Image of product', description: 'Image of product'})
    @Column({type: DataType.STRING, defaultValue: 'Product.png'})
    image: string;

    @ForeignKey(() => Cart)
    @Column({type: DataType.INTEGER})
    cartId: number;

    @ForeignKey(() => Assortment)
    @Column({type: DataType.INTEGER})
    assortmentId: number;

    @ForeignKey(() => Brand)
    @Column({type: DataType.INTEGER})
    brandId: number;

    @BelongsTo(() => Cart)
    cart: Cart

    @BelongsTo(() => Assortment, )
    assortment: Assortment;

    @BelongsTo(() => Brand, )
    brand: Brand;

    @HasMany(() => Rating)
    rate: Rating[];

    @HasMany(() => CartProducts)
    cartProducts: CartProducts[];

    @HasMany(() => ProductInfo, {as: 'info'})
    productInfos: ProductInfo[];

}