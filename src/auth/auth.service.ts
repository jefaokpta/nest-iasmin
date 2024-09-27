import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { LoginDto } from './dto/login.dto';
import { UserService } from '../user/user.service';
import { compareSync } from 'bcrypt';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    private readonly userService: UserService,
    private readonly jwtService: JwtService,
  ) {}

  async create(loginDto: LoginDto) {
    const user = await this.userService.findByEmail(loginDto.email);
    if (!user) {
      throw new HttpException('sai fora', HttpStatus.UNAUTHORIZED);
    }
    if (!compareSync(loginDto.password, user.password)) {
      throw new HttpException('sai fora', HttpStatus.UNAUTHORIZED);
    }
    const payload = { sub: user.id, username: user.name, email: user.email };
    return {
      access_token: await this.jwtService.signAsync(payload, { expiresIn: '1d' })
    }
  }
}
