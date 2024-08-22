import { isNotEmpty, IsString,IsNotEmpty } from "class-validator";
import { ApiProperty } from "@nestjs/swagger";
export class CreateCategoryDto {
    @ApiProperty()
    @IsNotEmpty()
    name: string;
}
