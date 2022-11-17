import { ApiProperty } from '@nestjs/swagger';
import {
  IsEmail,
  IsNotEmpty,
  IsString,
  Matches,
  MinLength,
} from 'class-validator';

export class CreateUserDto {
  @IsNotEmpty()
  @IsString()
  @ApiProperty()
  readonly fullName: string;

  @IsNotEmpty()
  @IsString()
  @ApiProperty()
  readonly userName: string;

  @IsNotEmpty()
  @IsEmail()
  @Matches(/^\S+@\S+\.\S+$/, { message: 'please type your valid email' })
  @ApiProperty()
  readonly email: string;

  @IsNotEmpty()
  @IsString()
  @ApiProperty({default:"male"})
  readonly gender: string;

  @IsNotEmpty()
  @IsString()
  @MinLength(8,{message:'password should be min 8 character'})
  @ApiProperty()
  password: string;
}

export class EmailDto {
  @ApiProperty({ type: String, required: true })
  @IsNotEmpty()
  @IsEmail()
  email: string;
}
