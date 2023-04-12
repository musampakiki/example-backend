import { ApiProperty } from '@nestjs/swagger';
import { Table, Column, Model, DataType, ForeignKey, BelongsToMany, BelongsTo } from 'sequelize-typescript';
import { Ban } from './ban.entity';
import { Role } from './roles.entity';
import { UserRoles } from './user-roles.entity';
// import { UserBan } from './user-ban.entity';

@Table
export class User extends Model<User> {
    @ApiProperty({ example: 1, description: 'Unique identifier' })
    @Column({ type: DataType.INTEGER, primaryKey: true, autoIncrement: true })
    id: number;

    @ApiProperty({ example: 'user@example.com', description: 'Email address' })
    @Column({ type: DataType.STRING(100), unique: true, allowNull: false })
    email: string;

    @ApiProperty({ example: 'password', description: 'Password' })
    @Column({ type: DataType.STRING(100), allowNull: false })
    password: string;

    @ApiProperty({ example: 'John', description: 'First name' })
    @Column({ type: DataType.STRING(50), allowNull: false })
    firstName: string;

    @ApiProperty({ example: 'Doe', description: 'Last name' })
    @Column({ type: DataType.STRING(50), allowNull: false })
    lastName: string;

    @ApiProperty({ example: 'example.com/avatar.jpg', description: 'Avatar image URL' })
    @Column({ type: DataType.STRING })
    avatar: string;

    @ApiProperty({ example: 'true', description: 'User verified' })
    @Column({ type: DataType.BOOLEAN })
    verified: boolean;

    @ForeignKey(() => Role)
    @Column({ type: DataType.INTEGER })
    roleId: number;

    @BelongsToMany(() => Role, () => UserRoles)
    roles: Role[];

    @ForeignKey(() => Ban)
    @Column({ type: DataType.INTEGER })
    banId: number;

    @BelongsTo(() => Ban)
    ban: Ban;
}
