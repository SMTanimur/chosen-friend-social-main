
import { UserModule } from './modules/users/user.module';
import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CoreModule } from './modules/core/core.module';
import { authModule } from './modules/auth/auth.module';


@Module({
  imports: [authModule, UserModule,CoreModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
