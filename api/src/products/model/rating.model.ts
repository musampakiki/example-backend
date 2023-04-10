import {Model, Table, Column, DataType, BelongsTo, ForeignKey} from "sequelize-typescript";
import {ApiProperty} from "@nestjs/swagger";
import {User} from "../../users/models/users.model";
import {Product} from "./product.model";


interface RatingCreationAttrs {
    rate: string;
}

@Table({tableName: 'rating'})
export class Rating extends Model<Rating, RatingCreationAttrs> {
    @ApiProperty({example: '1', description: 'unique id'})
    @Column({type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true})
    id: number;

    @ApiProperty({example: 'New rating', description: 'Name rating'})
    @Column({type: DataType.STRING, unique: true, allowNull: false})
    rate: string;

    @ForeignKey(() => User)
    @Column({type: DataType.INTEGER})
    userId: number;

    @ForeignKey(() => Product)
    @Column({type: DataType.INTEGER})
    productId: number;

    @BelongsTo(() => User, )
    user: User;

    @BelongsTo(() => Product, )
    product: Product;

}