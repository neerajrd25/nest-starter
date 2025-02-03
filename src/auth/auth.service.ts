import { ConflictException, Injectable, UnauthorizedException } from '@nestjs/common';
import { UsersService } from 'src/users/users.service';
import { SignUpDTO } from './dto/sign-up.dto.';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(private userService: UsersService,
    private jwtService: JwtService
  ) { }



  async signIn(email: string, pass: string): Promise<any> {

    const user = await this.userService.findByEmail(email);
    if (user?.password !== pass) {
      throw new UnauthorizedException();
    }
    const { password, ...result } = user;
    // TODO: Generate a JWT and return it here
    // instead of the user object
    const payload = { sub : { id: result._id, name: result.name, email: result.email } };

    return {
      access_token: await this.jwtService.signAsync(payload),
    };
  }

  async signUp(signUpDTO: SignUpDTO): Promise<any> {

    const { name, email, password } = signUpDTO;
    const user = await this.userService.findByEmail(email);
    
    if (user) {
      throw new ConflictException('User with this email already exists');
    }

    return this.userService.create({ email, name, password });

  }



}
