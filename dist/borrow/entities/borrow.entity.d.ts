import { Book } from 'src/book/entities/book.entity';
import { User } from 'src/user/entities/user.entity';
export declare class Borrow {
    id: number;
    user: User;
    book: Book;
    donatedAt: Date;
    retern: Date;
}
