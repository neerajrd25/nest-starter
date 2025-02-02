import { Injectable } from '@nestjs/common';
import { ValidatorConstraint, ValidatorConstraintInterface, ValidationArguments } from 'class-validator';
import { Model } from 'mongoose';
import { UserDocument } from '../schema/user.schema';

@ValidatorConstraint({ async: true })
@Injectable()
export class IsEmailUnique implements ValidatorConstraintInterface {
  constructor(private readonly userModel: Model<UserDocument>) {}

  async validate(email: string): Promise<boolean> {
    console.log('Injected userModel:', this.userModel); // Log to ensure the model is injected
    const user = await this.userModel.findOne({ email }).lean().exec();
    return !user; // Return true if email is unique, false if exists
  }

  defaultMessage(args: ValidationArguments) {
    return 'Email already exists';
  }
}
