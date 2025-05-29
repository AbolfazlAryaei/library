import { Injectable, UnauthorizedException } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { Repository } from 'typeorm';
import * as bcrypt from 'bcrypt';
import { singinDTO } from './dto/singin.dto';
import { JwtService } from '@nestjs/jwt';
@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private userREP: Repository<User>,
    private jwtservice: JwtService,
  ) {}
  async create(createUserDto: CreateUserDto) {
    const { email, password, username } = createUserDto;
    const findEmail = await this.userREP.findOne({ where: { email } });

    if (findEmail) throw new UnauthorizedException('email is use');

    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = this.userREP.create({
      email,
      password: hashedPassword,
      username,
    });
  return this.userREP.save(newUser);
    
  }

  async singin(singinDTO: singinDTO) {
    const { email, password } = singinDTO;

    const user = await this.userREP.findOne({ where: { email } });
    if (!user) {
      throw new UnauthorizedException('Invalid credentials');
    }
    const correctPassword = await bcrypt.compare(password, user.password);
    if (!correctPassword) {
      throw new UnauthorizedException('Invalid password');
    }
    const playload = { sub: user.id, role: user.roles, email: user.email };
    const token = await this.jwtservice.signAsync(playload);

    return {
      access_token: token,
      user: {
        userId: user.id,
        email: user.email,
        username: user.username,
        role: user.roles,
      },
    };
  }

  findOne(id: number) {
    return `This action returns a #${id} user`;
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
