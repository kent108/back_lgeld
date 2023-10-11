import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString, MaxLength } from "class-validator";

export class CreatePriceDto {

    
  @ApiProperty()
  @IsString()
  @MaxLength(255)
  @IsNotEmpty()
  price: string;
}
