import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString, MaxLength } from "class-validator";

export class CreateUserDto {
  admin: boolean;

  @ApiProperty()
  @IsString()
  @MaxLength(255)
  @IsNotEmpty()
  name: string;

  @ApiProperty()
  @IsString()
  @MaxLength(255)
  @IsNotEmpty()
  firstname: string;

  @ApiProperty()
  @IsString()
  @MaxLength(255)
  @IsNotEmpty()
  mail: string;

  @ApiProperty()
  @IsString()
  @MaxLength(60)
  @IsNotEmpty()
  password: string;

  @ApiProperty()
  @IsString()
  @MaxLength(10)
  phone: string;
}
