import { Table, Column, Model, ForeignKey, BelongsTo } from 'sequelize-typescript';
import { User } from './users.entity';
import { Ban } from './ban.entity';

@Table
export class UserBan extends Model<UserBan> {
    @ForeignKey(() => User)
    @Column
    userId: number;

    @BelongsTo(() => User)
    user: User;

    @ForeignKey(() => Ban)
    @Column
    banId: number;

    @BelongsTo(() => Ban)
    ban: Ban;
}
