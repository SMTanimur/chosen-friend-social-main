/* eslint-disable @typescript-eslint/no-var-requires */
/*
https://docs.nestjs.com/modules
*/

import { Module } from '@nestjs/common';
import {  APP_INTERCEPTOR } from '@nestjs/core';
import { MongooseModule } from '@nestjs/mongoose';
import { ServerConfig } from '../../configs/server.config';



import { LoggingInterceptor } from './interceptors/logging.interceptor';

@Module({
  imports: [MongooseModule.forRoot(ServerConfig.NX_MONGODB_URI)],
  controllers: [],
  providers: [
    // {
    //   provide: APP_FILTER,
    //   useClass: HttpExceptionFilter,
    // },
    { provide: APP_INTERCEPTOR, useClass: LoggingInterceptor },
  ],
})
export class CoreModule {}
