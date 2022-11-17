
import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsNotEmpty, IsString } from "class-validator";
import { UserDocument } from "../../users";

export class LoginResponeDto {
  @ApiProperty({ type: String, required: true })
  @IsNotEmpty()
  @IsString()
  accessToken: string;

  @ApiProperty({  required: true })
  @IsNotEmpty()
  user: UserDocument;
}

// Login DTO
export class LoginUserDto {
  @ApiProperty({ type: String, required: true,default:'smtrstar@gmail.com' })
  @IsNotEmpty()
  @IsEmail()
  email: string;

  @ApiProperty({ type: String, required: true ,default:'12345678' })
  @IsNotEmpty()
  @IsString()
  password: string;
}