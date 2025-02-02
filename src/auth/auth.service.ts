import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UsersService } from 'src/users/users.service';
import { SignUpDTO } from './dto/sign-up.dto.';

@Injectable()
export class AuthService {
  constructor(private userService: UsersService) { }



  async signIn(email: string, pass: string): Promise<any> {
    
    const user = await this.userService.findByEmail(email);
    if (user?.password !== pass) {
      throw new UnauthorizedException();
    }
    const { password, ...result } = user ;
    // TODO: Generate a JWT and return it here
    // instead of the user object

    console.log('result');
    console.log(result);
    
    
    return result;
  }

  async signUp(signUpDTO: SignUpDTO): Promise<any> {
    
    console.log('passed valdiation')
    // const user = await this.userService.findByEmail(email);
    // if (user?.password !== pass) {
    //   throw new UnauthorizedException();
    // }
    // const { password, ...result } = user ;
    // // TODO: Generate a JWT and return it here
    // // instead of the user object

    // console.log('result');
    // console.log(result);
    
    
    return 'result';
  }



}
