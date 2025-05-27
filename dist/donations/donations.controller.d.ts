import { DonationsService } from './donations.service';
import { CreateDonationDto } from './dto/create-donation.dto';
import { UpdateDonationDto } from './dto/update-donation.dto';
export declare class DonationsController {
    private readonly donationsService;
    constructor(donationsService: DonationsService);
    create(createDonationDto: CreateDonationDto): string;
    findAll(): string;
    findOne(id: string): string;
    update(id: string, updateDonationDto: UpdateDonationDto): string;
    remove(id: string): string;
}
