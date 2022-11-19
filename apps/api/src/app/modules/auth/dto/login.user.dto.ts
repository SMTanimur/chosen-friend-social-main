import { ApiProperty } from '@nestjs/swagger'
import { IsEmail, IsNotEmpty } from 'class-validator'

export class LoginRequestDto {
  @ApiProperty({ type: 'string' ,default:'smtrstar@gmail.com'})
  @IsNotEmpty()
  @IsEmail()
  email: string

  @ApiProperty({ type: 'string' ,default:'12345678'})
  @IsNotEmpty()
  password: string
}
