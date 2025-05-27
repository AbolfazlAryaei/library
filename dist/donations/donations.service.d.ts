import { CreateDonationDto } from './dto/create-donation.dto';
import { UpdateDonationDto } from './dto/update-donation.dto';
export declare class DonationsService {
    create(createDonationDto: CreateDonationDto): string;
    findAll(): string;
    findOne(id: number): string;
    update(id: number, updateDonationDto: UpdateDonationDto): string;
    remove(id: number): string;
}
