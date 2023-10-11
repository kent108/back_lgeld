import { IsEmail, IsNotEmpty } from "class-validator";

export class LoginDto {
  @IsEmail()
  @IsNotEmpty()
  mail: string;

  @IsEmail()
  @IsNotEmpty()
  password: string;
}