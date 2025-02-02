import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { MongooseModule } from '@nestjs/mongoose';
import { AuthModule } from './auth/auth.module';
const connectionString = 'mongodb+srv://neerajdbmaster:uRuh2w5MLiGuGZNJ@neeraj-2024.aknqy.mongodb.net/';
const dbName = 'spendytestdb';


@Module({
  imports: [
    MongooseModule.forRoot(connectionString, { dbName }),
    UsersModule,
    AuthModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
