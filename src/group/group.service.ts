import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateGroupDto, UpdateGroupDto } from './dto';

@Injectable()
export class GroupService {
  constructor(private readonly prisma: PrismaService) {}

  async create(createGroupDto: CreateGroupDto) {
    return this.prisma.group.create({
      data: {
        group_name: createGroupDto.group_name,
        lesson_start_time: createGroupDto.lesson_start_time,
        lesson_continuous: createGroupDto.lesson_continuous,
        lesson_week_day: createGroupDto.lesson_week_day,
        group_stage_id: createGroupDto.group_stage_id,
        room_number: createGroupDto.room_number,
        room_floor: createGroupDto.room_floor,
        branch_id: createGroupDto.branch_id,
        lessons_quant: createGroupDto.lessons_quant,
        is_active: createGroupDto.is_active,
      },
    });
  }

  async findAll() {
    return this.prisma.group.findMany();
  }

  async findOne(id: number) {
    return this.prisma.group.findUnique({
      where: { id },
    });
  }

  async update(id: number, updateGroupDto: UpdateGroupDto) {
    return this.prisma.group.update({
      where: { id },
      data: updateGroupDto,
    });
  }

  async remove(id: number) {
    return this.prisma.group.delete({
      where: { id },
    });
  }
}
