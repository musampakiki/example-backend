import {Model, Table, Column, DataType, ForeignKey} from "sequelize-typescript";
import {ApiProperty} from "@nestjs/swagger";
import {Role} from "../models/roles.model";
import {User} from "../../users/models/users.model";



@Table({tableName: 'user_roles', createdAt: false, updatedAt: false})
export class UserRoles extends Model<UserRoles> {
    @ApiProperty({example: '1', description: 'unique id'})
    @Column({type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true})
    id: number;

    @ForeignKey(() => User)
    @ApiProperty({example: '1', description: 'user id'})
    @Column({type: DataType.INTEGER})
    userId: number;

    @ForeignKey(() => Role)
    @ApiProperty({example: '1', description: 'role id'})
    @Column({type: DataType.INTEGER})
    roleId: number;
}