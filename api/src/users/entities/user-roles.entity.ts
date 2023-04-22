import { Table, Column, Model, ForeignKey, DataType, BelongsTo, BeforeSave } from 'sequelize-typescript';
import { ApiProperty } from "@nestjs/swagger";
import { User } from './users.entity';
import { Role } from './roles.entity';

@Table({ tableName: 'user_roles', createdAt: false, updatedAt: false })
export class UserRoles extends Model<UserRoles> {
    @ApiProperty({ example: '1', description: 'unique id' })
    @Column({ type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true })
    id: number;

    @ForeignKey(() => User)
    @ApiProperty({ example: '1', description: 'user id' })
    @Column({ type: DataType.INTEGER })
    userId: number;

    @ForeignKey(() => Role)
    @ApiProperty({ example: '1', description: 'role id' })
    @Column({ type: DataType.INTEGER })
    roleId: number;

    @BelongsTo(() => Role)
    role: Role;

    @ApiProperty({ example: 'USER', description: 'role USER' })
    @Column({ type: DataType.STRING(10) })
    roleName: string;

    @BeforeSave
    static async setRoleValue(userRole: UserRoles) {
        const role = await Role.findByPk(userRole.roleId);
        if (role) {
            userRole.roleName = role.value;
        }
    }
}
