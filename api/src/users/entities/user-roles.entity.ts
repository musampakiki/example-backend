import { Table, Model, ForeignKey, BelongsTo } from 'sequelize-typescript';
import { User } from './users.entity';
import { Role } from './roles.entity';

@Table({ tableName: 'user_roles' })
export class UserRoles extends Model<UserRoles> {
    @ForeignKey(() => User)
    @BelongsTo(() => User)
    user_id: number;

    @ForeignKey(() => Role)
    @BelongsTo(() => Role)
    role_id: number;
}
