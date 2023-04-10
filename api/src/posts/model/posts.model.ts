import {Model, Table, Column, DataType, BelongsTo, ForeignKey} from "sequelize-typescript";
import {ApiProperty} from "@nestjs/swagger";
import {User} from "../../users/models/users.model";


interface PostCreationAttrs {
    title: string;
    description: string;
    content: string;
    userId: number;
    image: string;
}

@Table({tableName: 'posts'})
export class Post extends Model<Post, PostCreationAttrs> {
    @ApiProperty({example: '1', description: 'unique id'})
    @Column({type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true})
    id: number;

    @ApiProperty({example: 'New post', description: 'Name post'})
    @Column({type: DataType.STRING, unique: true, allowNull: false})
    title: string;

    @ApiProperty({example: 'Post for example', description: 'Post for example'})
    @Column({type: DataType.STRING, defaultValue: false})
    description: string;

    @ApiProperty({example: 'Post content', description: 'Post content'})
    @Column({type: DataType.STRING, allowNull: false})
    content: string;

    @ApiProperty({example: 'Image title', description: 'Image title'})
    @Column({type: DataType.STRING})
    image: string;

    @ForeignKey(() => User)
    @Column({type: DataType.INTEGER})
    userId: number;

    @BelongsTo(() => User)
    author: User

}