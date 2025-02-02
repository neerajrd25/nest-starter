import { IsString, IsNotEmpty, MinLength, MaxLength, IsEmail, Validate } from 'class-validator';
import { IsEmailUnique } from 'src/users/validators/unique-email.validator';
export class SignUpDTO  {

  @IsString()
  @IsNotEmpty({message: 'Name is required'})
  @MinLength(3)
  @MaxLength(30)
  readonly name: string;

  @IsString()
  @IsNotEmpty()
  @MinLength(8)
  @MaxLength(15)
  readonly password: string;
  
  
  @IsNotEmpty()
  @IsString()
  @IsEmail()
  @Validate(IsEmailUnique)  // Custom validation for unique email
  readonly email: string
}
