import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './entities/user.entity';

@Module({
  imports:[
    PassportModule,
      JwtModule.registerAsync({
          imports:[ConfigModule],
          useFactory:async (config:ConfigService)=>({
            secret:config.get<string>('JWT_SECRET'),
            signOptions:{expiresIn:config.get<string>('JWT_EXPIRES_IN')},
          }),
          inject:[ConfigService]
        }),
        TypeOrmModule.forFeature([User]), 
  ],
  controllers: [UserController],
  providers: [UserService],
})
export class UserModule {}
