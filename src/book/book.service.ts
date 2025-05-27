import { Injectable, UnauthorizedException } from '@nestjs/common';
import { CreateBookDto } from './dto/create-book.dto';
import { UpdateBookDto } from './dto/update-book.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Book } from './entities/book.entity';
import { Repository } from 'typeorm';

@Injectable()
export class BookService {
  constructor(
    @InjectRepository(Book)
    private bookREP: Repository<Book>,
  ) {}
  async create(createBookDto: CreateBookDto) {
    const { titel, author, description, borrowCount } = createBookDto;
    const findbook = await this.bookREP.findOne({
      where: { titel: titel },
    });
    if (findbook) {
      throw new UnauthorizedException('Book already exists');
    }
    const book = this.bookREP.create({
      titel,
      author,
      description,
      borrowCount,
      isAvailable: false,
    });
    return this.bookREP.save(book);
  }

  findAll() {
    return `This action returns all book`;
  }

  findOne(id: number) {
    return `This action returns a #${id} book`;
  }

  update(id: number, updateBookDto: UpdateBookDto) {
    return `This action updates a #${id} book`;
  }

  remove(id: number) {
    return `This action removes a #${id} book`;
  }
}
