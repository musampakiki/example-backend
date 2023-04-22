import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { Ban } from '../entities/ban.entity';
import { User } from '../entities/users.entity';
import { BanController } from '../controllers/ban.controller';
import { BanService } from '../services/ban.service';

@Module({
    imports: [SequelizeModule.forFeature([Ban, User])],
    controllers: [BanController],
    providers: [BanService],
})
export class BanModule {}
