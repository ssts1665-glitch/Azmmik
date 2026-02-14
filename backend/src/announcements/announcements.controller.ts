import { Body, Controller, Get, Post } from '@nestjs/common';
import { IsString } from 'class-validator';
import { store } from '../common/store';

class AnnouncementDto {
  @IsString() text!: string;
}

@Controller('announcements')
export class AnnouncementsController {
  @Get()
  list() {
    return store.announcements;
  }

  @Post()
  create(@Body() dto: AnnouncementDto) {
    const created = { id: Date.now().toString(), text: dto.text, createdAt: new Date().toISOString() };
    store.announcements.push(created);
    return created;
  }
}
