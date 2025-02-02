import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { UserSchema, User, UserDocument } from './schema/user.schema';
import { IsEmailUnique } from './validators/unique-email.validator';
import { Model } from 'mongoose';

@Module({
  imports: [
    MongooseModule.forFeature([{name: User.name, schema: UserSchema}])
  ],
  controllers: [UsersController],
  providers: [UsersService,
    {
      provide: IsEmailUnique, // Use a provider for IsEmailUnique
      useFactory: (userModel: Model<UserDocument>) => new IsEmailUnique(userModel),
      inject: [User.name], // Inject the user model
    },

  ],
  exports: [UsersService, IsEmailUnique, MongooseModule]
})
export class UsersModule {}
