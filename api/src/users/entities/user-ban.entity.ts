import { BelongsTo, Column, DataType, ForeignKey, Model, Table } from 'sequelize-typescript';
import { Ban } from './ban.entity';
import { User } from './users.entity';

@Table({ tableName: 'user_bans' })
export class UserBan extends Model<UserBan> {
    @Column({ type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true })
    id: number;

    @ForeignKey(() => User)
    @Column({ type: DataType.INTEGER })
    userId: number;

    @BelongsTo(() => User)
    user: User;

    @ForeignKey(() => Ban)
    @Column({ type: DataType.INTEGER })
    banId: number;

    @BelongsTo(() => Ban)
    ban: Ban;
}
