import { ApiProperty } from '@nestjs/swagger';
import { Table, Column, Model, DataType, ForeignKey, BelongsTo } from 'sequelize-typescript';
import { User } from './users.entity';

@Table
export class Ban extends Model<Ban> {
    @ApiProperty({ example: 1, description: 'Unique identifier' })
    @Column({ type: DataType.INTEGER, primaryKey: true, autoIncrement: true })
    id: number;

    @ForeignKey(() => User)
    @Column({ type: DataType.INTEGER, allowNull: false })
    userId: number;

    @BelongsTo(() => User)
    user: User;

    @ApiProperty({ example: 'true', description: 'User banned' })
    @Column({ type: DataType.BOOLEAN, allowNull: false, defaultValue: false })
    isBan: boolean;

    @ApiProperty({ example: 'Offensive behavior', description: 'Reason for the ban' })
    @Column({ type: DataType.STRING(100) })
    reason: string;

    @ApiProperty({ example: '2023-05-01T00:00:00.000Z', description: 'Expiration date and time of the ban' })
    @Column({ type: DataType.INTEGER })
    duration: number;

    @ApiProperty({ example: '2023-05-01T00:00:00.000Z', description: 'Expiration date and time of the ban' })
    @Column({ type: DataType.DATE })
    expiredAt: Date;
}
