import { Column, DataType, Model, Table, BelongsToMany } from 'sequelize-typescript';
import { User } from './users.entity';
import { UserRole } from './user-roles.entity';

@Table({ tableName: 'roles' })
export class Role extends Model<Role> {
    @Column({ type: DataType.INTEGER, autoIncrement: true, primaryKey: true })
    id: number;

    @Column({ type: DataType.STRING, unique: true, allowNull: false })
    name: string;

    @Column({ type: DataType.STRING, allowNull: true })
    description: string;

    @BelongsToMany(() => User, () => UserRole)
    users: User[];
}