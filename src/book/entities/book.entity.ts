import { Borrow } from 'src/borrow/entities/borrow.entity';
import { Donation } from 'src/donations/entities/donation.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
@Entity()
export class Book {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  titel: string;

  @Column()
  author: string;

  @Column({ nullable: true })
  description: string;

  @Column({ default: true })
  isAvailable: boolean;

  @Column({ default: 0 })
  borrowCount: number;
  
  @OneToMany(() => Borrow, (borrow) => borrow.book)
  borrow: Borrow[];

  @OneToMany(() => Donation, (donate) => donate.book)
  donate: Donation[];
}
