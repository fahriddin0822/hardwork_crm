import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateLessonDto, UpdateLessonDto } from './dto';

@Injectable()
export class LessonsService {
  constructor(private readonly prisma: PrismaService) {}

  async create(createLessonDto: CreateLessonDto) {
    return this.prisma.lessons.create({
      data: {
        lesson_theme: createLessonDto.lesson_theme,
        lesson_number: createLessonDto.lesson_number,
        group_id: createLessonDto.group_id,
        lesson_date: createLessonDto.lesson_date,
      },
    });
  }

  async findAll() {
    return this.prisma.lessons.findMany();
  }

  async findOne(id: number) {
    return this.prisma.lessons.findUnique({
      where: { id },
    });
  }

  async update(id: number, updateLessonDto: UpdateLessonDto) {
    return this.prisma.lessons.update({
      where: { id },
      data: updateLessonDto,
    });
  }

  async remove(id: number) {
    return this.prisma.lessons.delete({
      where: { id },
    });
  }
}
