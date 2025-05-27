import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { Role } from './role.enum';
import { Borrow } from 'src/borrow/entities/borrow.entity';
import { Donation } from 'src/donations/entities/donation.entity';
@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  username: string;

  @Column()
  email: string;

  @Column()
  password: string;

  @Column({ type: 'text', default: 'Member' })
  roles: string;

  @OneToMany(() => Borrow, (borrowing) => borrowing.user)
  borrowings: Borrow[];

  @OneToMany(() => Donation, (donation) => donation.user)
  donations: Donation[];
}
