import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { IsString } from 'class-validator';
import { store } from '../common/store';

class SendMessageDto {
  @IsString() chatId!: string;
  @IsString() senderId!: string;
  @IsString() text!: string;
}

@Controller('chat')
export class ChatController {
  @Get('messages')
  list() {
    return store.messages;
  }

  @Post('messages')
  send(@Body() dto: SendMessageDto) {
    if (store.settings.chatClosed && dto.senderId !== '1') {
      return { blocked: true, message: 'متاسفانه به دلایلی امکان چت بسته شده است' };
    }
    const message = { id: Date.now().toString(), createdAt: new Date().toISOString(), ...dto };
    store.messages.push(message);
    return message;
  }

  @Delete('messages/:id')
  remove(@Param('id') id: string) {
    store.messages = store.messages.filter((m) => m.id !== id);
    return { ok: true };
  }
}
