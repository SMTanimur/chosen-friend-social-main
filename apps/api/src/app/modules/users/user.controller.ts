/* eslint-disable @typescript-eslint/no-explicit-any */


import { Body, Controller, Get, Post, Req, UseGuards } from '@nestjs/common';
import { ApiBadRequestResponse, ApiBearerAuth, ApiConflictResponse, ApiCreatedResponse, ApiInternalServerErrorResponse, ApiTags, ApiUnauthorizedResponse } from '@nestjs/swagger';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { BadRequestDto, ConFlictExceptionDto, InternalServerErrorExceptionDto, UnauthorizedExceptionDto } from '../swagger/swangger.dto';
import { CreateUserDto } from './dto';
import { UserService } from './user.service';

@ApiBearerAuth()
@ApiTags('users')
@ApiInternalServerErrorResponse({
  type: InternalServerErrorExceptionDto,
  description: 'Server error',
})
@ApiUnauthorizedResponse({
  type: UnauthorizedExceptionDto,
  description: 'need login',
})
@Controller('users')
export class UserController {
  constructor(private readonly userService:UserService){}

    // REGISTER
  @ApiCreatedResponse({
    type: "",
    description: 'Register success',
  })
  @ApiBadRequestResponse({
    type: BadRequestDto,
    description:
      'userName, email, password not require, incorrect password format',
  })
  @ApiConflictResponse({
    type: ConFlictExceptionDto,
    description: 'Email already exist',
  })

  @Post('register')
  async create(@Body() createUserDto: CreateUserDto) {
    return await this.userService.regisrer(createUserDto);
  }

  
  @UseGuards(JwtAuthGuard)
  @Get('profile')
 async getProfile(@Req() req: any) {
    const user= await this.userService.findUserById(req.user.id)
    return user
  }

  

}
