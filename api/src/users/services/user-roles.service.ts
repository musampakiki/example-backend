import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { User } from '../entities/users.entity';
import { Role } from '../entities/roles.entity';
import { UserRoles } from '../entities/user-roles.entity';

@Injectable()
export class UserRolesService {
    constructor(
        @InjectModel(User)
        private readonly userModel: typeof User,
        @InjectModel(Role)
        private readonly roleModel: typeof Role,
        @InjectModel(UserRoles)
        private readonly userRoleModel: typeof UserRoles,
    ) {}

    async addUserRole(userRoleData: Partial<UserRoles>): Promise<UserRoles> {
        return await this.userRoleModel.create(userRoleData);
    }
}
