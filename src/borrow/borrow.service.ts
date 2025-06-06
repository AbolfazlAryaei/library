import { Injectable, UnauthorizedException } from '@nestjs/common';
import { CreateBorrowDto } from './dto/create-borrow.dto';
import { UpdateBorrowDto } from './dto/update-borrow.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/user/entities/user.entity';
import { IsNull, Repository } from 'typeorm';
import { Book } from 'src/book/entities/book.entity';
import { Borrow } from './entities/borrow.entity';

@Injectable()
export class BorrowService {
  constructor(
    @InjectRepository(User)
    private userREP: Repository<User>,

    @InjectRepository(Book)
    private bookREP: Repository<Book>,

    @InjectRepository(Borrow)
    private borrowREP: Repository<Borrow>,
  ) {}
  async create(createBorrowDto: CreateBorrowDto) {
    const { userID, bookID } = createBorrowDto;

    const findUser = await this.userREP.findOneBy({ id: userID });
    if (!findUser) throw new UnauthorizedException('User not found');

    const findBook = await this.bookREP.findOneBy({ id: bookID });
    if (!findBook) throw new UnauthorizedException('Book not found');

    if (!findBook.isAvailable)
      throw new UnauthorizedException('Book is not available for borrowing');

    const borrow = this.borrowREP.create({
      user: findUser,
      book: findBook,
      donatedAt: new Date(),
    });
    const savrborrow = await this.borrowREP.save(borrow);
    findBook.isAvailable = false;

    await this.bookREP.save(findBook);
    return savrborrow;
  }

  async returnBook(borrowID: number) {
    const findborrow = await this.borrowREP.findOneBy({ id: borrowID });
    if (!findborrow) throw new UnauthorizedException('not found borrow');
    findborrow.retern = new Date();
    return this.borrowREP.save(findborrow);
  }
  async findAll() {
    return await this.borrowREP.find({
      relations: ['user', 'book'],
    });
  }

  async findOne(id: number) {
    const borrow = await this.borrowREP.find({
      where: {
        user: { id: id },
        retern: IsNull(),
      },
      relations: ['book'],
    });
    console.log(id);
    console.log(borrow);
    if (!borrow) throw new UnauthorizedException('Borrow not found');
    return borrow;
  }
}
