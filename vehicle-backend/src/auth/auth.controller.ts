import { Controller, Get, Post, Body, Patch, Param, Delete, HttpCode, Req, ClassSerializerInterceptor, UseInterceptors, HttpStatus, HttpException } from '@nestjs/common';
import { AuthService } from './auth.service';
import { CreateAuthDto } from './dto/create-auth.dto';
import { UpdateAuthDto } from './dto/update-auth.dto';
import { ApiResponse } from '@nestjs/swagger';
import { loginDto } from './dto/user-login.dto';
import { Request } from 'express';
@Controller('auth')
@UseInterceptors(ClassSerializerInterceptor)

export class AuthController {
  constructor(private readonly authService: AuthService) {}
  /**
   * Handles user sign up by delegating to the AuthService.
   *
   * @param {CreateAuthDto} registerUserDto - The user data to be used for sign up.
   * @return {*} The result of the sign up operation.
   */
  @Post('signup')
  @HttpCode(200)

  create(@Body() registerUserDto: CreateAuthDto) {
    return this.authService.signup(registerUserDto);
  }


    /**
   * Handles user sign up confirmation by delegating to the AuthService.
   *
   * @param {Request} request - The HTTP request object containing the authorization token.
   * @return {*} The result of the sign up confirmation operation.
   */
    @Get('signup/confirm')
    @HttpCode(200)
   @ApiResponse({ status: HttpStatus.OK, description: 'Verified' })
    async signUpConfirm(@Req() request: Request) {
      const token = request.headers.authorization;
      return this.authService.verify(token);
    }

    /**
   * Handles user sign up confirmation by delegating to the AuthService.
   *
   * @param {Request} request - The HTTP request object containing the authorization token.
   * @return {*} The result of the sign up confirmation operation.
   */
    @Post('login')
    @HttpCode(200)
    @ApiResponse({ status: HttpStatus.OK, description: 'Loggedin' })
    async login(@Body() userData: loginDto) {
      try {
        const userLogin = await this.authService.login(userData);
        return userLogin;
  
      } catch (e) {
        throw new HttpException(e.response.error, e.response.status)
      }
    }
  



    
  @Get()
  findAll() {
    return this.authService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.authService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateAuthDto: UpdateAuthDto) {
    return this.authService.update(+id, updateAuthDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.authService.remove(+id);
  }
}
