import { Body, Controller, Get, Patch, Post } from '@nestjs/common';
import { store } from '../common/store';

@Controller('settings')
export class SettingsController {
  @Get()
  get() {
    return store.settings;
  }

  @Patch()
  patch(@Body() body: Partial<typeof store.settings>) {
    store.settings = { ...store.settings, ...body };
    return store.settings;
  }

  @Post('reset')
  resetApp() {
    store.users = store.users.filter((u) => u.role === 'admin');
    store.messages = [];
    store.exams = [];
    store.announcements = [];
    return { ok: true };
  }
}
