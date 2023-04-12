import { Column, DataType, Model, Table, BelongsToMany, HasOne } from 'sequelize-typescript';
import { Role } from './roles.entity';
import { UserRoles } from './user-roles.entity';
import { Ban } from './ban.entity';
import { ApiProperty } from "@nestjs/swagger";

@Table({ tableName: 'users' })
export class User extends Model<User> {
    @ApiProperty({ example: '1', description: 'unique id' })
    @Column({ type: DataType.INTEGER, autoIncrement: true, primaryKey: true })
    id: number;

    @ApiProperty({ example: 'login22', description: 'User login' })
    @Column({ type: DataType.STRING, allowNull: false })
    username: string;

    @ApiProperty({ example: 'Jerry', description: 'User firstname' })
    @Column({ type: DataType.STRING, allowNull: true })
    firstname: string;

    @ApiProperty({ example: 'Green', description: 'User lastname' })
    @Column({ type: DataType.STRING, allowNull: true })
    lastname: string;

    @ApiProperty({ example: 'example@gmail.com', description: 'User email' })
    @Column({ type: DataType.STRING, unique: true, allowNull: false })
    email: string;

    @ApiProperty({ example: '123456', description: 'User password' })
    @Column({ type: DataType.STRING, allowNull: false })
    password: string;

    @ApiProperty({ example: 'true', description: 'User verified' })
    @Column({ type: DataType.BOOLEAN, defaultValue: false })
    verified: boolean;

    @ApiProperty({ example: '/path/to/avatar.jpg', description: 'Avatar path' })
    @Column({ type: DataType.STRING, allowNull: true })
    avatar: string;

    @BelongsToMany(() => Role, () => UserRoles)
    roles: Role[];

    @HasOne(() => Ban)
    ban: Ban;
}
