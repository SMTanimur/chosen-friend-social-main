
import { ApiProperty} from '@nestjs/swagger';
import {   IsOptional, IsString, MinLength } from 'class-validator';


export class UpdateUserDto {
  @IsOptional()
  @IsString()
  @ApiProperty() 
  avatar?: string;

  @IsOptional()
  @IsString()
  @ApiProperty()
  readonly firstName?: string;

  @IsOptional()
  @IsString()
  @ApiProperty()
  readonly lastName?: string;

  @IsOptional()
  @IsString()
  @MinLength(8,{message:'password should be min 8 character'})
  @ApiProperty()
  password?: string;
  
}
