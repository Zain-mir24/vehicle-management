import { ApiProperty } from '@nestjs/swagger';
import { IsString , IsNotEmpty} from 'class-validator';
export class loginDto{
    @ApiProperty()
    @IsString({ message: 'Email must be a string' })
    @IsNotEmpty()
    email:string;
    
    @ApiProperty()
    @IsString({ message: 'Password must be a string' })
    @IsNotEmpty()
    password:string;
}