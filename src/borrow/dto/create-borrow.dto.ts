import { IsNumber } from 'class-validator';

export class CreateBorrowDto {
  @IsNumber()
  userID: number;

  @IsNumber()
  bookID: number;
}
