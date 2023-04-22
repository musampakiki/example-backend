import {IsNumber, IsString} from "class-validator";

export class AddRoleDto{
    @IsNumber()
    userId: number;

    @IsNumber()
    roleId: number;

    @IsString()
    roleName: string
}