import { ApiProperty } from '@nestjs/swagger';
import { IsString , IsNotEmpty,IsOptional, MinLength} from 'class-validator';
export class CreateUserDto {
    @ApiProperty()
    @IsOptional()
    readonly username?: string;
    @ApiProperty()
    @IsOptional()
    @MinLength(6, { message: 'Password must be at least 6 characters long' })
    readonly password?: string;
    @ApiProperty()
    @IsOptional()
    readonly email?: string;
}
