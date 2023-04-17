import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Ban } from '../entities/ban.entity';
import { CreateBanDto, UpdateBanDto } from '../dto/ban.dto';

@Injectable()
export class BanService {
    constructor(
        @InjectModel(Ban)
        private readonly banModel: typeof Ban,
    ) {}

    async createBan(createBanDto: CreateBanDto): Promise<Ban> {
        const ban = new Ban();
        ban.userId = createBanDto.userId;
        ban.reason = createBanDto.reason;
        ban.expiredAt = new Date(Date.now() + createBanDto.duration);

        return await ban.save();
    }

    async getBanById(id: number): Promise<Ban> {
        const ban = await this.banModel.findByPk(id);

        if (ban && ban.expiredAt.getTime() < Date.now()) {
            await this.deleteBan(id);
            return null;
        }

        return ban;
    }

    async getAllBans(): Promise<Ban[]> {
        const bans = await this.banModel.findAll();

        return bans.filter((ban) => !ban.expiredAt || ban.expiredAt.getTime() >= Date.now());
    }

    async updateBan(id: number, updateBanDto: UpdateBanDto): Promise<Ban> {
        const ban = await this.getBanById(id);

        if (!ban) {
            return null;
        }

        ban.userId = updateBanDto.userId;
        ban.reason = updateBanDto.reason;
        ban.expiredAt = new Date(Date.now() + updateBanDto.duration);

        return ban.save();
    }

    async deleteBan(id: number): Promise<void> {
        await this.banModel.destroy({ where: { id } });
    }
}
