/* eslint-disable @typescript-eslint/no-unused-vars */

/*
https://docs.nestjs.com/providers#services
*/

import {  Injectable } from '@nestjs/common';
import { EmailDto, UserDocument, UserService } from '../users';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt'
@Injectable()
export class AuthService {
  constructor(
    private usersService: UserService,
    private jwtService: JwtService,
  ) {}
  async validateUser(email: EmailDto, pass: string): Promise<unknown> {
    const user = await this.usersService.findOneByEmail(email);
    const isMatch = await bcrypt.compare(pass, user.password);
    if (user && isMatch) {
      const { password, createdAt, updatedAt, ...result } = user['_doc'];
      return result;
    }
    return null;
  }

  async login(user: UserDocument) {
    const payload = {
      userName: user.userName,
      id: user['_id'].toString(),
      role: user.role,
    };

    return {
      user,
      accessToken: this.jwtService.sign(payload),
    };
  }
 
 
}
