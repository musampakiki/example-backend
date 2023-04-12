import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { Ban } from '../entities/ban.entity';
import { BanController } from '../controllers/bans.controller';
import { BanService } from '../services/bans.service';

@Module({
    imports: [SequelizeModule.forFeature([Ban])],
    controllers: [BanController],
    providers: [BanService],
})
export class BanModule {}


// Обратите внимание, что мы импортируем TypeOrmModule.forFeature и передаем в него массив
// сущностей, которые хотим использовать в модуле. Также мы импортируем UserModule,
// так как у нас есть связь между сущностями User и Ban.
//
//В providers мы указываем сервисы, которые будут использоваться в этом модуле.
// Здесь у нас только один сервис - BanService.
//
//В controllers мы указываем контроллеры, которые будут использоваться в этом модуле.
// Здесь у нас только один контроллер - BanController.
//
//В exports мы указываем сервисы, которые будут доступны для других модулей, которые
// импортируют этот модуль. Здесь у нас только один сервис - BanService.
