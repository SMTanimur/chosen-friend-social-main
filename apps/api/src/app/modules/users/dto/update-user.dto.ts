
import { ApiProperty} from '@nestjs/swagger';
import {   IsOptional, IsString, MaxLength } from 'class-validator';


export class UpdateUserDto {
  @IsOptional()
  @IsString()
  @ApiProperty() 
  readonly avatar?: string;

  @IsOptional()
  @IsString()
  @ApiProperty() 
  readonly banner?: string;
 
  @IsOptional()
  @IsString()
  @ApiProperty()
  readonly fullName?: string;

  @IsOptional()
  @IsString()
  @ApiProperty()
  @MaxLength(200)
  readonly bio?: string;
  
}
