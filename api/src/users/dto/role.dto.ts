import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class RoleDTO {
    @ApiProperty({ example: 'admin', description: 'The role name' })
    @IsString()
    readonly name: string;

    @ApiProperty({
        example: 'The admin role',
        description: 'A brief description of the role',
    })
    @IsString()
    readonly description: string;
}
