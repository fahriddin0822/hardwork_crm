import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateStudentDto, UpdateStudentDto } from './dto';

@Injectable()
export class StudentsService {
  constructor(private readonly prisma: PrismaService) {}

  async create(createStudentDto: CreateStudentDto) {
    return this.prisma.students.create({
      data: {
        lid_id: createStudentDto.lid_id,
        first_name: createStudentDto.first_name,
        last_name: createStudentDto.last_name,
        phone_number: createStudentDto.phone_number,
        birthday: createStudentDto.birthday,
        gender: createStudentDto.gender,
      },
    });
  }

  async findAll() {
    return this.prisma.students.findMany();
  }

  async findOne(id: number) {
    return this.prisma.students.findUnique({
      where: { id },
    });
  }

  async update(id: number, updateStudentDto: UpdateStudentDto) {
    return this.prisma.students.update({
      where: { id },
      data: updateStudentDto,
    });
  }

  async remove(id: number) {
    return this.prisma.students.delete({
      where: { id },
    });
  }
}
