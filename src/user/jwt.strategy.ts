import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { ConfigService } from '@nestjs/config';
import { UserService } from './user.service';
import { User } from './entities/user.entity';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(
    private configService: ConfigService,
    private userService: UserService, 
  ) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: configService.get<string>('JWT_SECRET'), 
    });
  }

  async validate(payload: {
    sub: number;
    email: string;
    role: string;
  }): Promise<any> {

    return { userId: payload.sub, email: payload.email, roles: payload.role }; 
  }
}
