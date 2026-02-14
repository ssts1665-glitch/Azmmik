import { Body, Controller, Get, Post } from '@nestjs/common';
import { IsBoolean, IsNumber, IsString } from 'class-validator';
import { store } from '../common/store';

class CreateExamDto {
  @IsString() title!: string;
  @IsString() classCode!: string;
  @IsBoolean() active!: boolean;
  @IsNumber() durationMinutes!: number;
}

@Controller('exams')
export class ExamsController {
  @Get()
  list() {
    return store.exams;
  }

  @Post()
  create(@Body() dto: CreateExamDto) {
    const exam = { id: Date.now().toString(), ...dto };
    store.exams.push(exam);
    return exam;
  }

  @Get('student/:classCode')
  byClass() {
    return store.exams;
  }
}
