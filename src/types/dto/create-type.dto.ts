import { ApiProperty } from '@nestjs/swagger';
import { IsString, MaxLength } from 'class-validator';

export class CreateTypeDto {
  @ApiProperty()
  @IsString()
  @MaxLength(255)
  description: string;
}
