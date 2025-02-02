import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User, UserDocument } from './schema/user.schema';

@Injectable()
export class UsersService {

  constructor(@InjectModel(User.name) private userModel:Model<UserDocument>){
    console.log("User Model Injected:", !!this.userModel);
  }
  async create(createUserDto: CreateUserDto) {
    const newUser = await new this.userModel(createUserDto);
    return newUser.save();
    
  }

  async findAll() {
    const list = await this.userModel.find();
    console.log(list)
    return list;
    // return Promise.resolve([] as User[]);
  }

  async findOne(id: string) {
    console.log(id);
    const response = await this.userModel.findById(id)
    console.log(response);
    
    return response;
  }
  async findByEmail(email: string) {
    const response = await this.userModel.findOne({email}).lean().exec() 
    return response
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
