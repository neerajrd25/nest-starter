import { IsEmail, IsNotEmpty, IsString, MaxLength, MinLength, Validate } from "class-validator";

export class CreateUserDto {
  // _id: string;
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
  readonly email: string
}
