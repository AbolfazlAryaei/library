import { Borrow } from 'src/borrow/entities/borrow.entity';
import { Donation } from 'src/donations/entities/donation.entity';
export declare class Book {
    id: number;
    titel: string;
    author: string;
    description: string;
    isAvailable: boolean;
    borrowCount: number;
    borrow: Borrow[];
    donate: Donation[];
}
