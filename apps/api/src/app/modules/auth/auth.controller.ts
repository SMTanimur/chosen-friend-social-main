/*
https://docs.nestjs.com/controllers#controllers
*/

import { Controller, Get, HttpCode, Post,Request,UseGuards } from '@nestjs/common';
import { ApiAcceptedResponse, ApiBadRequestResponse, ApiBearerAuth, ApiBody, ApiInternalServerErrorResponse, ApiTags } from '@nestjs/swagger';
import { BadRequestDto, InternalServerErrorExceptionDto } from '../swagger/swangger.dto';
import { AuthService } from './auth.service';
import { JwtAuthGuard } from './guards/jwt-auth.guard';
import { LocalAuthGuard } from './guards/local-auth.guard';
import { LoginResponeDto, LoginUserDto } from './swagger/Login.dto';
@ApiTags('auth')
@ApiInternalServerErrorResponse({
  type: InternalServerErrorExceptionDto,
  description: 'Server error',
})
@Controller('auth')
export class AuthController {
  constructor( private readonly authService:AuthService){}
   // LOGIN
   @UseGuards(LocalAuthGuard)
   @ApiBody({ type: LoginUserDto, description: 'Enter your email and password' })
   @ApiAcceptedResponse({
     type: LoginResponeDto,
     description: 'Login success',
   })
   @ApiBadRequestResponse({
     type: BadRequestDto,
     description:
       'Email, password wrong, email field, password field not empty ',
   })
   @HttpCode(202)
   @Post('login')
   async login(@Request() req) {
     return this.authService.login(req.user);
   }
 
}
