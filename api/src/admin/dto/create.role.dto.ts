import {ApiProperty} from "@nestjs/swagger";


export class CreateRoleDto{
    @ApiProperty({example: 'ADMIN', description: 'user role'})
    readonly value: string;
    @ApiProperty({example: 'Roots', description: 'user roots'})
    readonly description: string;
}