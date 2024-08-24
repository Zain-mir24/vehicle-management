import {  IsString,IsNotEmpty } from "class-validator";
import { ApiProperty } from "@nestjs/swagger";
import { ObjectId } from "mongoose";
export class CreateCarDto {

    @ApiProperty()
    @IsNotEmpty()
    categoryId: ObjectId;

    @ApiProperty()
    @IsString({message:'make must be a string'})
    @IsNotEmpty()
    make: string;

    @ApiProperty()
    @IsString({message:'model must be a string'})
    @IsNotEmpty()
    model: string;  

    @ApiProperty()
    @IsString({message:'registrationNo must be a string'})
    @IsNotEmpty()
    registrationNo: string; 

    @ApiProperty()
    @IsString({message:'color must be a string'})
    @IsNotEmpty()
    color: string;  

    @ApiProperty()
    @IsNotEmpty()
    year: number;   
}
