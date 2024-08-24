import { ConflictException, HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { CreateAuthDto } from 'src/auth/dto/create-auth.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import {User,UserSchema,UserDocument} from './entities/user.entity';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
@Injectable()
export class UsersService {
constructor(@InjectModel(User.name) private userModel: Model<UserDocument>){
  
}

 async create(createUser: CreateAuthDto) {
    const { email } = createUser;

    // Check if the email already exists
    const existingUser = await this.userModel.findOne({ email });
    if (existingUser) {
      throw new ConflictException('Email already in use');
    }

    // Create a new user
    const newUser = new this.userModel(createUser);
    
    try {
      return await newUser.save();
    } catch (error) {
      console.log("error",error);
      // Handle other possible errors
      throw new Error('Error creating user');
    }
  }
  

  async findByEmail(email: string) {
    try{
      const existingUser = await this.userModel.findOne({ email });

      return  JSON.parse(JSON.stringify(existingUser));

    }catch(e){
      throw new HttpException(
        {
          status: HttpStatus.BAD_REQUEST,
          error: e.message || e,
        },
        HttpStatus.BAD_REQUEST,
        {
          cause: e.message || e,
        },
      );
    }

  }

  findAll() {
    return `This action returns all users`;
  }

  findOne(id: number) {
    return `This action returns a #${id} user`;
  }

  async  update(id: number, updateUserDto: UpdateUserDto) {
    try{
      const updateVerificationStatus= await this.userModel.findByIdAndUpdate(id,updateUserDto,{new:true});
      return updateVerificationStatus
    }catch(e){
      console.log("ERRIR",e)
      throw new HttpException(
        {
          status: HttpStatus.BAD_REQUEST,
          error: e.message || e,
        },
        HttpStatus.BAD_REQUEST,
        {
          cause: e.message || e,
        },
      );
    }
   


  }


}
