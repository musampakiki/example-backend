import { ApiProperty } from '@nestjs/swagger';
import { IsDateString, IsOptional, IsString } from 'class-validator';

export class BanDTO {
    @ApiProperty({ example: 'Spamming', description: 'The reason for the ban' })
    @IsString()
    readonly reason: string;

    @ApiProperty({
        example: '2022-01-01T00:00:00.000Z',
        description: 'The date when the ban is lifted',
    })
    @IsDateString()
    readonly liftedAt: Date;

    @ApiProperty({
        example: '2021-01-01T00:00:00.000Z',
        description: 'The date when the ban starts',
    })
    @IsDateString()
    readonly startsAt: Date;

    @ApiProperty({
        example: 'https://example.com/img/banned.jpg',
        description: 'The URL of an image to display to the user',
    })
    @IsOptional()
    @IsString()
    readonly imageUrl?: string;
}
