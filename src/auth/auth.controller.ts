import { Controller, Post, Body } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LoginDto } from './dto/login.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post()
  login(@Body() loginDto: LoginDto) {
    console.log('loginDto', loginDto);
    return this.authService.create(loginDto);
  }

  @Post('create')
  createUserAwsCognito(@Body() loginDto: LoginDto) {
    return this.authService.createUserAwsCognito(loginDto);
  }

}
