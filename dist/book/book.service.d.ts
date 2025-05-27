import { CreateBookDto } from './dto/create-book.dto';
import { UpdateBookDto } from './dto/update-book.dto';
import { Book } from './entities/book.entity';
import { Repository } from 'typeorm';
export declare class BookService {
    private bookREP;
    constructor(bookREP: Repository<Book>);
    create(createBookDto: CreateBookDto): Promise<Book>;
    findAll(): string;
    findOne(id: number): string;
    update(id: number, updateBookDto: UpdateBookDto): string;
    remove(id: number): string;
}
