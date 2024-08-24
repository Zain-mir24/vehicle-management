import { isNotEmpty, IsString,IsNotEmpty } from "class-validator";
import { ApiProperty } from "@nestjs/swagger";
export class CreateCategoryDto {
    @ApiProperty()
    @IsString({message:'name must be a string'})
    @IsNotEmpty()
    name: string;
}
