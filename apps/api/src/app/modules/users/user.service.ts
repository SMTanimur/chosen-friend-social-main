/* eslint-disable @typescript-eslint/no-explicit-any */

import { ConflictException, Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { createHash } from '../../utils/hash';
import { CreateUserDto, EmailDto, UpdateUserDto } from './dto';
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
    const user  = await this.userModel.findOne({email:createUserDto.email})
      const user2 = await this.userModel.findOne({username:createUserDto.username})
     if(user) throw new ConflictException(' Email already Exist')
     if(user2) throw new ConflictException(' Username already Exist')
   createUserDto.password = await createHash(createUserDto.password)
  const newUser = await this.userModel.create(createUserDto);
  return {
    newUser,
    message:'Successfully register your account'
  }
}

async findOne(query: object): Promise<UserDocument> {
  const user = await this.userModel.findOne(query);

  if (!user) return null;

  return user;
}
async findUserById(id: string): Promise<any> {
  const user = await this.userModel.findOne({ _id: id }).select('-password');
  if (!user) return null;
  return user;
}

async findUserByUserName (username:string):Promise<any>{
  const user = await this.userModel.findOne({ username:username }).select('-password');
  if (!user) return null;
  return user
}

 async userProfileEdit (id:string,updateDto:UpdateUserDto):Promise<any>{
    const user = await this.userModel.findByIdAndUpdate(id,updateDto,{
      new:true
    })

    if (!user) throw new NotFoundException('User not found')
    
    return{
      message:'user successfully updated',
      user:user.toJSON()
    }

 }
}
