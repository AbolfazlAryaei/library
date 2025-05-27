import { Book } from 'src/book/entities/book.entity';
import { User } from 'src/user/entities/user.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
@Entity()
export class Borrow {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => User, (user) => user.borrowings)
  user: User;

  @ManyToOne(() => Book, (book) => book.borrow)
  book: Book;

  @Column({ type: 'date' })
  donatedAt: Date;

  @Column({ type: 'date', nullable: true })
  retern: Date;
}
