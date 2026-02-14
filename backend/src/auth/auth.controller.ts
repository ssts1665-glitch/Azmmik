import { Body, Controller, Post, UnauthorizedException } from '@nestjs/common';
import { IsIn, IsOptional, IsString, MinLength } from 'class-validator';
import { store } from '../common/store';

class LoginDto {
  @IsString() username!: string;
  @IsString() @MinLength(6) password!: string;
  @IsIn(['admin', 'manager', 'teacher', 'student']) role!: 'admin' | 'manager' | 'teacher' | 'student';
  @IsOptional() @IsString() schoolCode?: string;
  @IsOptional() @IsString() classCode?: string;
}

@Controller('auth')
export class AuthController {
  @Post('login')
  login(@Body() dto: LoginDto) {
    const user = store.users.find(
      (u) =>
        u.username === dto.username &&
        u.password === dto.password &&
        u.role === dto.role &&
        (dto.role !== 'teacher' || u.schoolCode === dto.schoolCode) &&
        (dto.role !== 'student' || u.classCode === dto.classCode)
    );

    if (!user || user.suspended) throw new UnauthorizedException('اطلاعات ورود نادرست است');
    return { token: `fake-${user.id}`, user };
  }
}
