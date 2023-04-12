import { ApiProperty } from '@nestjs/swagger';
import { Table, Column, Model, DataType, ForeignKey, BelongsTo } from 'sequelize-typescript';
import { User } from './users.entity';

@Table
export class Ban extends Model<Ban> {
    @ApiProperty({ example: 1, description: 'Unique identifier' })
    @Column({ type: DataType.INTEGER, primaryKey: true, autoIncrement: true })
    id: number;

    @ApiProperty({ example: 'Offensive behavior', description: 'Reason for the ban' })
    @Column({ type: DataType.STRING(100), allowNull: false })
    reason: string;

    @ApiProperty({ example: '2023-05-01T00:00:00.000Z', description: 'Expiration date and time of the ban' })
    @Column({ type: DataType.DATE, allowNull: false })
    expiredAt: Date;

    @ForeignKey(() => User)
    @Column({ type: DataType.INTEGER })
    userId: number;

    @BelongsTo(() => User)
    user: User;
}
