import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { ChatModule } from './chat/chat.module';
import { AnnouncementsModule } from './announcements/announcements.module';
import { SettingsModule } from './settings/settings.module';
import { ExamsModule } from './exams/exams.module';

@Module({
  imports: [AuthModule, UsersModule, ChatModule, AnnouncementsModule, SettingsModule, ExamsModule]
})
export class AppModule {}
