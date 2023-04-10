import {Model, Table, Column, DataType, BelongsToMany, HasMany, BelongsTo, HasOne} from "sequelize-typescript";
import {ApiProperty} from "@nestjs/swagger";
import {Role} from "../../admin/models/roles.model";
import {UserRoles} from "../../admin/dto/user-roles.model";
import {Post} from "../../posts/model/posts.model";
import {Cart} from "../../products/model/cart.model"
import {Rating} from "../../products/model/rating.model";

interface UserCreationAttrs {
    username: string;
    firstname: string;
    lastname: string;
    email: string;
    password: string;
    // verified: boolean;
}

@Table({tableName: 'users'})
export class User extends Model<User, UserCreationAttrs> {
    @ApiProperty({example: '1', description: 'unique id'})
    @Column({type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true})
    id: number;

    @ApiProperty({example: 'login22', description: 'User login'})
    @Column({type: DataType.STRING, unique: true, allowNull: false})
    username: string;

    @ApiProperty({example: 'Juda', description: 'User firstname'})
    @Column({type: DataType.STRING, allowNull: true})
    firstname: string;

    @ApiProperty({example: 'Green', description: 'User lastname'})
    @Column({type: DataType.STRING, allowNull: true})
    lastname: string;

    @ApiProperty({example: 'example@gmail.com', description: 'User email'})
    @Column({type: DataType.STRING, unique: true, allowNull: false})
    email: string;

    @ApiProperty({example: '123456', description: 'User password'})
    @Column({type: DataType.STRING, allowNull: false})
    password: string;

    @ApiProperty({example: 'true', description: 'User ban'})
    @Column({type: DataType.BOOLEAN, defaultValue: false})
    banned: boolean;

    // @ApiProperty({example: 'true', description: 'User verified'})
    // @Column({type: DataType.BOOLEAN, defaultValue: false})
    // verified: boolean;

    @ApiProperty({example: 'Bad registration', description: 'Reason ban'})
    @Column({type: DataType.STRING, allowNull: true})
    banReason: string;

    @BelongsToMany(() => Role, () => UserRoles)
    roles: Role[];

    @HasMany(() => Post)
    posts: Post[];

    @HasOne(() => Cart)
    cart: Cart;

    @HasMany(() => Rating)
    rating: Rating[];
}