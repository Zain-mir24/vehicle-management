import { MiddlewareConsumer, Module, RequestMethod } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { AuthModule } from './auth/auth.module';
import { CategoriesModule } from './categories/categories.module';
import { CarsModule } from './cars/cars.module';
import { UsersModule } from './users/users.module';
import { MongooseModule } from '@nestjs/mongoose';
import { MailerModule } from '@nestjs-modules/mailer';
import { LoggerMiddleware } from './common/middleware/auth.middleware';

require('dotenv').config();
@Module({
  imports: [ ConfigModule.forRoot({
    isGlobal: true,

  }),
  MongooseModule.forRoot(process.env.MONGODB_URI),
  MailerModule.forRoot({
    transport: {
      service: 'Gmail',
      auth: {
        user: process.env.MY_EMAIL,
        pass: process.env.EMAIL_PASS,
      },
    },
    defaults: {
      from: process.env.MY_EMAIL,
    },
  }),

AuthModule, CategoriesModule, CarsModule, UsersModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(LoggerMiddleware)
      .exclude(
        {
          path: '/api', method: RequestMethod.ALL
        },
        { path: '/auth/signup', method: RequestMethod.POST },
        { path: '/auth/login', method: RequestMethod.POST },
        { path: "/", method: RequestMethod.ALL }
      ).forRoutes('*');
  }
}
