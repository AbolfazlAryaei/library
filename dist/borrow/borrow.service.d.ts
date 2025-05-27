import { CreateBorrowDto } from './dto/create-borrow.dto';
import { UpdateBorrowDto } from './dto/update-borrow.dto';
import { User } from 'src/user/entities/user.entity';
import { Repository } from 'typeorm';
import { Book } from 'src/book/entities/book.entity';
import { Borrow } from './entities/borrow.entity';
export declare class BorrowService {
    private userREP;
    private bookREP;
    private borrowREP;
    constructor(userREP: Repository<User>, bookREP: Repository<Book>, borrowREP: Repository<Borrow>);
    create(createBorrowDto: CreateBorrowDto): Promise<Borrow>;
    findAll(): string;
    findOne(id: number): string;
    update(id: number, updateBorrowDto: UpdateBorrowDto): string;
    remove(id: number): string;
}
