import { BorrowService } from './borrow.service';
import { CreateBorrowDto } from './dto/create-borrow.dto';
import { UpdateBorrowDto } from './dto/update-borrow.dto';
export declare class BorrowController {
    private readonly borrowService;
    constructor(borrowService: BorrowService);
    create(createBorrowDto: CreateBorrowDto): Promise<import("./entities/borrow.entity").Borrow>;
    findAll(): string;
    findOne(id: string): string;
    update(id: string, updateBorrowDto: UpdateBorrowDto): string;
    remove(id: string): string;
}
