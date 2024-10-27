import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateLidDto, UpdateLidDto } from './dto';

@Injectable()
export class LidService {
  constructor(private readonly prisma: PrismaService) {}

  async create(createLidDto: CreateLidDto) {
    return this.prisma.lid.create({
      data: {
        first_name: createLidDto.first_name,
        last_name: createLidDto.last_name,
        phone_number: createLidDto.phone_number,
        target_id: createLidDto.target_id,
        lid_stage_id: createLidDto.lid_stage_id,
        test_date: createLidDto.test_date,
        trial_lesson_date: createLidDto.trial_lesson_date,
        trial_lesson_time: createLidDto.trial_lesson_time,
        trial_lesson_group_id: createLidDto.trial_lesson_group_id,
        lid_status_id: createLidDto.lid_status_id,
        cancel_reason_id: createLidDto.cancel_reason_id,
      },
    });
  }

  async findAll() {
    return this.prisma.lid.findMany();
  }

  async findOne(id: number) {
    return this.prisma.lid.findUnique({
      where: { id },
    });
  }

  async update(id: number, updateLidDto: UpdateLidDto) {
    return this.prisma.lid.update({
      where: { id },
      data: updateLidDto,
    });
  }

  async remove(id: number) {
    return this.prisma.lid.delete({
      where: { id },
    });
  }
}
