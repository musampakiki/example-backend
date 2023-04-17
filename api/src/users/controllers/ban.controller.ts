import {Controller, Get, Post, Body, Param, Put, Delete} from '@nestjs/common';
import {ApiOperation, ApiResponse, ApiTags} from '@nestjs/swagger';
import { BanService } from '../services/ban.service';
import { CreateBanDto, UpdateBanDto } from '../dto/ban.dto';
import { Ban } from '../entities/ban.entity';

@ApiTags('bans')
@Controller('bans')
export class BanController {
    constructor(private readonly banService: BanService) {}

    @Post()
    async createBan(@Body() banData: CreateBanDto): Promise<Ban> {
        return await this.banService.createBan(banData);
    }

    @Get(':id')
    async getBanById(@Param('id') id: number): Promise<Ban> {
        return await this.banService.getBanById(id);
    }

    @Get()
    async getAllBans(): Promise<Ban[]> {
        return await this.banService.getAllBans();
    }

    @ApiOperation({ summary: 'Update ban' })
    @ApiResponse({ status: 200, description: 'Ban successfully updated' })
    @ApiResponse({ status: 404, description: 'Ban not found' })
    @Put(':id')
    async updateBan(@Param('id') banId: number, @Body() banData: UpdateBanDto): Promise<Ban> {
        return await this.banService.updateBan(banId, banData);
    }


    @ApiOperation({ summary: 'Delete user' })
    @ApiResponse({ status: 204, description: 'User successfully deleted' })
    @ApiResponse({ status: 404, description: 'User not found' })
    @Delete(':id')
    async deleteBan(@Param('id') id: number): Promise<void> {
        await this.banService.deleteBan(id);
    }
}
