import { ApiProperty } from '@nestjs/swagger';
import { Table, Column, Model, DataType, BelongsToMany, HasMany } from 'sequelize-typescript';
import { Role } from './roles.entity'
import { UserRoles } from './user-roles.entity';


@Table
export class User extends Model<User> {
    @ApiProperty({ example: 1, description: 'Unique identifier' })
    @Column({ type: DataType.INTEGER, primaryKey: true, autoIncrement: true })
    id: number;

    @ApiProperty({example: 'login22', description: 'User login'})
    @Column({type: DataType.STRING, unique: true, allowNull: false})
    username: string;

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
    @Column({ type: DataType.BOOLEAN, defaultValue: false })
    verified: boolean;



    // @ForeignKey(() => Role)
    // @Column({ type: DataType.INTEGER })
    // roleId: number;
    //
    // @ForeignKey(() => Role)
    // @Column({ type: DataType.STRING (10) })
    // roleValue: string;
    //
    // @ForeignKey(() => Ban)
    // @Column({ type: DataType.INTEGER })
    // banId: number;

    @HasMany(() => UserRoles)
    userRoles: UserRoles[];

    @BelongsToMany(() => Role, () => UserRoles)
    roles: Role[];

    // @BelongsTo(() => Ban, () => UserBan)
    // ban: Ban;
}
