/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */

import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import passport = require('passport');
import * as MongoDBStore from 'connect-mongodb-session';
import session = require('express-session');
import { AppModule } from './app/app.module';
import { ServerConfig } from './app/configs/server.config';
import { SwaggerConfig } from './app/configs/swagger.config';
async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  //Swagger configuration
  SwaggerConfig(app)
  const globalPrefix = 'api';
  app.setGlobalPrefix(globalPrefix);

  const MongoStore = MongoDBStore(session);

  // Express session configuration
  app.use(
    session({
      name: 'twitter_sid',
      secret: ServerConfig.NX_SESSION_SECRET,
      resave: false,
      saveUninitialized: false,
      cookie: {
        maxAge: 30 * 24 * 60 * 60 * 1000, // 7 days
        httpOnly: true,
        sameSite: process.env.NODE_ENV === 'production' ? 'none' : 'lax',
        secure: process.env.NODE_ENV === 'production',
      },
      store: new MongoStore({
        uri: ServerConfig.NX_MONGODB_URI,
        collection: 'sessions',
        expires: 30 * 24 * 60 * 60 * 1000, // 7 days
      }),
    })
  );
  const port = ServerConfig.NX_PORT || 3333;


    //passport && session initialize
    app.use(passport.initialize());
    app.use(passport.session());

   // Bypass cors issue
   app.enableCors({
    credentials: true,
    origin: [ServerConfig.NX_CLIENT_URL, 'http://localhost:4200'],
  });
  await app.listen(port);
  Logger.log(
    `🚀 Application is running on: http://localhost:${port}/${globalPrefix}`
  );
}

bootstrap();
