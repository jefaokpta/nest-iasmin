import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { LoginDto } from './dto/login.dto';
import { UserService } from '../user/user.service';
import { compareSync } from 'bcrypt';
import { JwtService } from '@nestjs/jwt';
import { AdminCreateUserCommand, CognitoIdentityProviderClient } from '@aws-sdk/client-cognito-identity-provider';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class AuthService {
  constructor(
    private readonly userService: UserService,
    private readonly jwtService: JwtService,
    private readonly configService: ConfigService,
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
      access_token: await this.jwtService.signAsync(payload),
    };
  }

  async createUserAwsCognito(loginDto: LoginDto) {
    const cognitoClient = new CognitoIdentityProviderClient({
      region: 'us-east-1',
    });
    const command = new AdminCreateUserCommand({
      UserPoolId: this.configService.get<string>('AWS_USER_POOL_ID'),
      Username: loginDto.email,
      DesiredDeliveryMediums: ['EMAIL'],
      MessageAction: 'SUPPRESS',
      TemporaryPassword: loginDto.password,
    });

    return await cognitoClient.send(command);
  }
}
