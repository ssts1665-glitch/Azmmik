import { Module } from '@nestjs/common';
import { AnnouncementsController } from './announcements.controller';

@Module({ controllers: [AnnouncementsController] })
export class AnnouncementsModule {}
