import { Borrow } from 'src/borrow/entities/borrow.entity';
import { Donation } from 'src/donations/entities/donation.entity';
export declare class User {
    id: number;
    username: string;
    email: string;
    password: string;
    roles: string;
    borrowings: Borrow[];
    donations: Donation[];
}
