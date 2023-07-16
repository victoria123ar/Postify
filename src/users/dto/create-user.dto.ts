import {
    IsEmail,
    IsNotEmpty,
    IsString,
    IsStrongPassword,
  } from 'class-validator';
  
  export class CreateUserDTO {
    @IsString()
    @IsNotEmpty()
    name: string;
  
    @IsString()
    @IsNotEmpty()
    @IsEmail()
    email: string;
  
    @IsString()
    @IsNotEmpty()
    @IsStrongPassword({
      minLength: 8,
      minLowercase: 0,
      minSymbols: 0,
      minUppercase: 0,
      minNumbers: 0,
    })
    password: string;

    @IsString()
    @IsNotEmpty()
    avatar: string;
  }