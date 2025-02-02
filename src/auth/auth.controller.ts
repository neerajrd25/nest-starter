import { Body, Controller, HttpCode, HttpStatus, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { SignUpDTO } from './dto/sign-up.dto.';
import { SignInDTO } from './dto/sign-in.dto';

@Controller('auth')
export class AuthController {


  constructor(private authService: AuthService) { }

  @HttpCode(HttpStatus.OK)
  @Post('signin')
  signIn(@Body() signInDTO: SignInDTO) {
    console.log(signInDTO);
    
    return this.authService.signIn(signInDTO.email, signInDTO.password);
  }


  @HttpCode(HttpStatus.OK)
  @Post('signup')
  signUp(@Body() signUpDTO: SignUpDTO) {
    // return this.authService.signIn(signInDto.email, signInDto.password);
    return this.authService.signUp(signUpDTO);
  }


}
