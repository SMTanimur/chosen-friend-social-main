import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
/*
https://docs.nestjs.com/modules
*/

import { Module } from '@nestjs/common';
import {  UserService, UsersModel } from '../users';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { ServerConfig } from '../../configs/server.config';
import { ConfigModule } from '@nestjs/config';
import { JwtStrategy } from './jwt.strategy';
import {LocalStrategy} from './local.strategy'
@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    PassportModule,
    UsersModel,
    JwtModule.register({
      secret: ServerConfig.NX_JWT_SECRET_KEY,
      signOptions: { expiresIn: '1d' },
    }),
  ],
  controllers: [AuthController],
  providers: [AuthService,UserService,JwtStrategy,LocalStrategy],
})
export class AuthModule {}
