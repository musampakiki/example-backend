import { Column, DataType, ForeignKey, Model, Table } from 'sequelize-typescript';
import { User } from './users.entity';

@Table({ tableName: 'bans' })
export class Ban extends Model<Ban> {
    @Column({ type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true })
    id: number;

    @ForeignKey(() => User)
    @Column({ type: DataType.INTEGER })
    userId: number;

    @Column({ type: DataType.DATE, allowNull: false })
    banStart: Date;

    @Column({ type: DataType.DATE, allowNull: false })
    banEnd: Date;

    @Column({ type: DataType.STRING, allowNull: false })
    reason: string;
}
