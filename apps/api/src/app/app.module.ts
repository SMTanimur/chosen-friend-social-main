import { AuthModule } from './modules/auth/auth.module';
import { UserModule } from './modules/users/user.module';
import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CoreModule } from './modules/core/core.module';

@Module({
  imports: [AuthModule, UserModule,CoreModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
