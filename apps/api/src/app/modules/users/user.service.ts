/* eslint-disable @typescript-eslint/no-explicit-any */

import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { createHash } from '../../utils/hash';
import { CreateUserDto, EmailDto } from './dto';
import { User, UserDocument } from './entities';

@Injectable()
export class UserService {
  constructor(@InjectModel(User.name) private userModel: Model<UserDocument>){}

 async findOneByEmail(email:EmailDto):Promise<User>{
  const user = await this.userModel.findOne({
    email,
  });
  if (!user) throw new NotFoundException('User not exist');
  return user;
 }

 async regisrer(createUserDto: CreateUserDto): Promise<any> {
   createUserDto.password = await createHash(createUserDto.password)
  const newUser = await this.userModel.create(createUserDto);
  return newUser;
}
async findUserById(id: string): Promise<any> {
  const user = await this.userModel.findOne({ _id: id }).select('-password');
  if (!user) return null;
  return user;
}
}
