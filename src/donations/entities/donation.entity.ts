import { Book } from 'src/book/entities/book.entity';
import { User } from 'src/user/entities/user.entity';
import { Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
@Entity()
export class Donation {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => User, (user) => user.donations)
  user: User;
  
  @ManyToOne(() => Book, (book) => book.donate)
  book: Book;
}
