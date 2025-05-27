import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';
import { Repository } from 'typeorm';
import { singinDTO } from './dto/singin.dto';
import { JwtService } from '@nestjs/jwt';
export declare class UserService {
    private userREP;
    private jwtservice;
    constructor(userREP: Repository<User>, jwtservice: JwtService);
    create(createUserDto: CreateUserDto): Promise<User>;
    singin(singinDTO: singinDTO): Promise<{
        access_token: string;
        user: {
            id: number;
            email: string;
            username: string;
            role: string;
        };
    }>;
    findOne(id: number): string;
    update(id: number, updateUserDto: UpdateUserDto): string;
    remove(id: number): string;
}
