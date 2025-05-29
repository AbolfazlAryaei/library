import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
  Req,
  NotFoundException,
} from '@nestjs/common';
import { BorrowService } from './borrow.service';
import { CreateBorrowDto } from './dto/create-borrow.dto';
import { UpdateBorrowDto } from './dto/update-borrow.dto';
import { JwtAuthGuard } from 'src/user/jwt-auth.guard';
@Controller('borrow')
export class BorrowController {
  constructor(private readonly borrowService: BorrowService) {}

  @Post('/add')
  create(@Body() createBorrowDto: CreateBorrowDto) {
    return this.borrowService.create(createBorrowDto);
  }

  @Get()
  findAll() {
    return this.borrowService.findAll();
  }

  @Post('/:id/return')
  returnBook(@Param('id') id: number) {
    return this.borrowService.returnBook(+id);
  }

  @UseGuards(JwtAuthGuard)
  @Get('/list')
  getlist(@Req() req) {
const userId = req.user.userId
    if (!userId) {
      throw new NotFoundException('User ID not found in token.');
    }
    return this.borrowService.findOne(userId);
  }
}
