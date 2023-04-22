import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Role } from '../entities/roles.entity';
import { CreateRoleDto, UpdateRoleDto } from '../dto/role.dto';

@Injectable()
export class RoleService {
    constructor(
        @InjectModel(Role)
        private readonly roleModel: typeof Role,
    ) {}

    async getAllRoles(): Promise<Role[]> {
        return this.roleModel.findAll();
    }

    async getRoleById(id: number): Promise<Role> {
        return await this.roleModel.findByPk(id);
    }

    async getRoleByValue(value: string){
        return await this.roleModel.findOne({where: {value}});
    }

    async create(roleCreateDto: CreateRoleDto): Promise<Role> {
        const role = new Role();
        role.value = roleCreateDto.value;
        role.description = roleCreateDto.description;
        return await role.save();
    }

    async update(id: number, updateRoleDto: UpdateRoleDto): Promise<Role> {
        const role = await this.getRoleById(id);

        if (!role) {
            return null;
        }

        role.value = updateRoleDto.value;
        role.description = updateRoleDto.description

        await role.save();
    }

    async delete(id: number): Promise<void> {
        await this.roleModel.destroy({ where: { id } });
    }
}
