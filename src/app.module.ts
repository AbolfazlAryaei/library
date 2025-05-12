import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';
import jwtConfig from './auth/jwt.config';
import { config } from 'process';
import { ConfigModule } from '@nestjs/config';
@Module({
  imports: [UserModule, AuthModule,
    ConfigModule.forRoot({
      isGlobal:true,
      load:[jwtConfig]
    })
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
