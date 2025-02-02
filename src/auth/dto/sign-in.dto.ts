import { IsString, IsNotEmpty, MinLength, MaxLength, IsEmail } from 'class-validator';

export class SignInDTO  {

    @IsString()
    @IsNotEmpty()
    @MinLength(8)
    @MaxLength(15)
    readonly password: string;
    
    
    @IsNotEmpty()
    @IsString()
    @IsEmail()
    readonly email: string
}
