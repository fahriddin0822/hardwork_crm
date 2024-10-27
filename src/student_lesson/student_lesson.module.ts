import { Module } from '@nestjs/common';
import { StudentLessonsService } from './student_lesson.service';
import { StudentLessonController } from './student_lesson.controller';
import { PrismaService } from '../prisma/prisma.service';
import { PrismaModule } from '../prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  controllers: [StudentLessonController],
  providers: [StudentLessonsService],
})
export class StudentLessonModule {}
