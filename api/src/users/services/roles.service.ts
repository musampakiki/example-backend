import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Role } from '../entities/roles.entity';
import { CreateRoleDto, UpdateRoleDto } from '../dto/role.dto';

@Injectable()
export class RoleService {
    constructor(
        @InjectModel(Role)
        private roleModel: typeof Role,
    ) {}

    async findAll(): Promise<Role[]> {
        return this.roleModel.findAll();
    }

    async findOne(id: number): Promise<Role> {
        return this.roleModel.findByPk(id);
    }

    async getRoleById(id: number): Promise<Role> {
        const role = await this.roleModel.findByPk(id);
        return role;
    }

    async getAllRoles(): Promise<Role[]> {
        const roles = await this.roleModel.findAll();
        return roles
    }

    async create(сreateRoleDto: CreateRoleDto): Promise<Role> {
        const role = new Role();
        role.userId = сreateRoleDto.userId;
        role.name = сreateRoleDto.name;
        role.description = сreateRoleDto.description;
        return await role.save();
    }

    async update(id: number, updateRoleDto: UpdateRoleDto): Promise<Role> {
        const role = await this.getRoleById(id);

        if (!role) {
            return null;
        }

        role.userId = updateRoleDto.userId;
        role.name = updateRoleDto.name;
        role.description = updateRoleDto.description

        await role.save();
    }

    async delete(id: number): Promise<void> {
        await this.roleModel.destroy({ where: { id } });
    }
}
