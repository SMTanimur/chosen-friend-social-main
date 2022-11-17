/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */

import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';

import { AppModule } from './app/app.module';
import { ServerConfig } from './app/configs/server.config';
import { SwaggerConfig } from './app/configs/swagger.config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  //Swagger configuration
  SwaggerConfig(app)
  const globalPrefix = 'api';
  app.setGlobalPrefix(globalPrefix);
  const port = ServerConfig.NX_PORT || 3333;
  await app.listen(port);
  Logger.log(
    `🚀 Application is running on: http://localhost:${port}/${globalPrefix}`
  );
}

bootstrap();
