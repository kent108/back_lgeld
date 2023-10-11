import { IsNotEmpty, IsString, MaxLength } from "class-validator";

export class CreateUserDto {
  admin: boolean;

  @IsString()
  @MaxLength(255)
  @IsNotEmpty()
  name: string;

  @IsString()
  @MaxLength(255)
  @IsNotEmpty()
  firstname: string;

  @IsString()
  @MaxLength(255)
  @IsNotEmpty()
  mail: string;

  @IsString()
  @MaxLength(60)
  @IsNotEmpty()
  password: string;

  @IsString()
  @MaxLength(10)
  phone: string;
}
