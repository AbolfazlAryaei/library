import { IsString, IsNotEmpty, IsOptional } from 'class-validator';
export class CreateBookDto {
  @IsString()
  titel: string;

  @IsString()
  author: string;

  @IsOptional()
  @IsString()
  description: string;
  
  @IsOptional()
  @IsString()
  borrowCount: number;
}
