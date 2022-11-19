/* eslint-disable @typescript-eslint/no-explicit-any */

import {
  Body,
  Controller,
  Get,
  HttpCode,
  Patch,
  Post,
  Req,
  UseGuards,
} from '@nestjs/common';
import {
  ApiBadRequestResponse,
  ApiConflictResponse,
  ApiCreatedResponse,
  ApiInternalServerErrorResponse,
  ApiOperation,
  ApiResponse,
  ApiTags,
  ApiUnauthorizedResponse,
} from '@nestjs/swagger';
import { AuthenticatedGuard } from '../auth/guards/authenticated.guard';

import {
  BadRequestDto,
  ConFlictExceptionDto,
  InternalServerErrorExceptionDto,
  UnauthorizedExceptionDto,
} from '../swagger/swangger.dto';
import { CreateUserDto, UpdateUserDto } from './dto';
import { UserDocument } from './entities';
import { UserService } from './user.service';

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
  constructor(private readonly userService: UserService) {}

  // REGISTER
  @ApiCreatedResponse({
    type: '',
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

  @UseGuards(AuthenticatedGuard)
  @Get('me')
  async getProfile(@Req() req: any) {
    const user = await this.userService.findUserByUserName(req.user.username);
    return user;
  }

  @ApiOperation({
    summary: 'Edit User Profile',
    description: 'User Can edit his profile with her own data',
  })
  @ApiResponse({status:200,description:'user successfully updated'})
   @HttpCode(200)
  @UseGuards(AuthenticatedGuard)
  @Patch('edit')
  async updateProfile(
    @Req() req: { user: UserDocument },
    @Body() updateUserDto: UpdateUserDto
  ) {
    return await this.userService.userProfileEdit(req.user._id, updateUserDto);
  }
}
