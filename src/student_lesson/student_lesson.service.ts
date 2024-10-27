import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateStudentLessonDto, UpdateStudentLessonDto } from './dto';

@Injectable()
export class StudentLessonsService {
  constructor(private readonly prisma: PrismaService) {}

  async create(createStudentLessonDto: CreateStudentLessonDto) {
    return this.prisma.studentLessons.create({
      data: {
        lesson_id: createStudentLessonDto.lesson_id,
        student_id: createStudentLessonDto.student_id,
        is_there: createStudentLessonDto.is_there,
        reason: createStudentLessonDto.reason,
        is_paid: createStudentLessonDto.is_paid,
      },
    });
  }

  async findAll() {
    return this.prisma.studentLessons.findMany();
  }

  async findOne(id: number) {
    return this.prisma.studentLessons.findUnique({
      where: { id },
    });
  }

  async update(id: number, updateStudentLessonDto: UpdateStudentLessonDto) {
    return this.prisma.studentLessons.update({
      where: { id },
      data: updateStudentLessonDto,
    });
  }

  async remove(id: number) {
    return this.prisma.studentLessons.delete({
      where: { id },
    });
  }
}
