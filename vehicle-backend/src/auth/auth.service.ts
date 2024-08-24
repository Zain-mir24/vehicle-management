import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateAuthDto } from './dto/create-auth.dto';
import { UpdateAuthDto } from './dto/update-auth.dto';
import { loginDto } from './dto/user-login.dto';
import { MailerService } from '@nestjs-modules/mailer';
import { UsersService } from 'src/users/users.service';
import * as bcrypt from 'bcrypt';
import * as jwt from 'jsonwebtoken';

@Injectable()
export class AuthService {
/**
 * Initializes a new instance of the AuthService class.
 *
 * @param {MailerService} mailerService - The mailer service to be used for sending emails.
 */
  constructor(
    private readonly usersService: UsersService,
    private readonly mailerService: MailerService

  ) {
  }
    /**
   * Handles user signup by generating access and refresh tokens, creating a new user, and sending a verification email.
   *
   * @param {CreateAuthDto} createAuthDto - The user's signup data.
   * @return {object} An object containing a message indicating that the user should check their email to verify their signup.
   */
  async signup (createAuthDto: CreateAuthDto){
    try {
      let user = await this.usersService.findByEmail(createAuthDto.email);
      
      console.log(user);

      if(user&&!!user.verified){
        throw new Error("User already exists")
      }
      const accessToken = jwt.sign(
        { user_email: createAuthDto.email },
        process.env.SECRET_KEY,
        { expiresIn: '1h' },
      );

    
      if (!user) {
        await this.usersService.create(createAuthDto);

      }
    


      await this.mailerService
        .sendMail({
          to: createAuthDto.email, // list of receivers
          from: process.env.MY_EMAIL, // sender address
          subject: 'Testing Nest MailerModule ✔', // Subject line
          text: `This is your token login and verify {accessToken}`, // plaintext body
          html: `<a href="http://localhost:5173/signup-verify/${accessToken}">Click here to verify your account</a>`, // HTML body content
        })
        .then((r) => {
          console.log(r, 'SEND RESPONSE');
        })
        .catch((e) => {
          console.log(e, 'ERRRORR');
        });
      return {
        message: 'Check email to verify your signup',
      };
    } catch (e) {
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

  async login(userLoginData:loginDto){
    try {
      const user = await this.usersService.findByEmail(userLoginData.email);
      if(!user.verified){
        throw new Error("Please Verify your email")
      }
      const comparePassword=await bcrypt.compare(userLoginData.password , user.password);
      if(!comparePassword){
        throw new Error("Please Enter Correct Password")
      }
      delete user.password;
      const accessToken = jwt.sign(
        { user_email: userLoginData.email },
        process.env.SECRET_KEY,
        { expiresIn: '20h' },
      );
    
      const userData={
        ...user,
        accessToken
      }
      return {
        message: 'Login successful',
        userData,
        status: HttpStatus.OK
            };
    } catch (e) {
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

  async verify(token:string){
    try {
      const verify = jwt.verify(token, process.env.SECRET_KEY);
      const email = verify.user_email;
      let userData = await this.usersService.findByEmail(email);
      if(!!userData.verified)
         return {
        message:"user already verified",
        status:HttpStatus.CONFLICT
      }
      if (verify) {
        userData.verified = true;
       
        const toUpdate = {
          verified:true
        }
        const update = await this.usersService.update(userData.id, toUpdate);

        if (!update) {
          throw new Error('Error updating data');
        }
        return {
          message: 'User Verified',
         status: HttpStatus.OK
        };
      } else {
        throw new Error('Token expireed');
      }
    } catch (e) {
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
