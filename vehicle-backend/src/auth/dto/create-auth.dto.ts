import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString, isString, MinLength } from 'class-validator';
export class CreateAuthDto {
    @ApiProperty()
    @IsNotEmpty({ message: 'Username is required' })
    @IsString({ message: 'Username must be a string' })
    readonly username: string;
    @ApiProperty()
    @IsNotEmpty({ message: 'Password is required' })
    @IsString({ message: 'Password must be a string' })
    @MinLength(6, { message: 'Password must be at least 6 characters long' })
    readonly password: string;
    @ApiProperty()
    @IsNotEmpty({ message: 'Email is required' })
    @IsString({ message: 'Email must be a string' })
    readonly email: string;

}
