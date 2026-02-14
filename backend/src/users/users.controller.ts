import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { IsIn, IsString } from 'class-validator';
import { store } from '../common/store';

class CreateUserDto {
  @IsIn(['manager', 'teacher', 'student']) role!: 'manager' | 'teacher' | 'student';
  @IsString() username!: string;
  @IsString() password!: string;
  @IsString() fullName!: string;
}

@Controller('users')
export class UsersController {
  @Get()
  all() {
    return store.users;
  }

  @Post()
  create(@Body() dto: CreateUserDto) {
    const created = { id: Date.now().toString(), ...dto };
    store.users.push(created);
    return created;
  }

  @Patch(':id/suspend')
  suspend(@Param('id') id: string) {
    const user = store.users.find((u) => u.id === id);
    if (user) user.suspended = true;
    return { ok: true };
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    store.users = store.users.filter((u) => u.id !== id);
    return { ok: true };
  }
}
