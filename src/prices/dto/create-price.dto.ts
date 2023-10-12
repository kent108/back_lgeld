import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsNumber } from "class-validator";

export class CreatePriceDto {

    
  @ApiProperty()
  @IsNumber()
  @IsNotEmpty()
  price: number;
}
