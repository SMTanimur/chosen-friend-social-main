import { UserService } from './user.service';
import { UserController } from './user.controller';

/*
https://docs.nestjs.com/modules
*/

import { Module } from '@nestjs/common';
import { UsersModel } from './entities';

@Module({
  imports: [UsersModel],
  controllers: [UserController],
  providers: [UserService],
})
export class UserModule {}
