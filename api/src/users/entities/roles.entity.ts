import { ApiProperty } from '@nestjs/swagger';
import { BelongsToMany, Column, DataType, Model, Table } from 'sequelize-typescript';
import { User } from './users.entity';
import { UserRoles } from './user-roles.entity';

@Table
export class Role extends Model<Role> {
    @ApiProperty({ example: '1', description: 'Unique identifier' })
    @Column({
        type: DataType.INTEGER,
        unique: true,
        autoIncrement: true,
        primaryKey: true,
    })
    id: number;

    @ApiProperty({ example: 'ADMIN', description: 'Role name' })
    @Column({
        type: DataType.STRING,
        unique: true,
        allowNull: false,
    })
    value: string;

    @ApiProperty({ example: 'Role for administrator', description: 'Role description' })
    @Column({
        type: DataType.STRING,
        allowNull: true,
    })
    description: string;

    @BelongsToMany(() => User, () => UserRoles)
    users: User[];
}
