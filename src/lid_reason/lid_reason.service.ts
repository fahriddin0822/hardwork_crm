import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateLidReasonDto, UpdateLidReasonDto } from './dto';

@Injectable()
export class LidReasonService {
  constructor(private readonly prisma: PrismaService) {}

  async create(createLidReasonDto: CreateLidReasonDto) {
    return this.prisma.lidReason.create({
      data: {
        reason_lid: createLidReasonDto.reason_lid,
      },
    });
  }

  async findAll() {
    return this.prisma.lidReason.findMany();
  }

  async findOne(id: number) {
    return this.prisma.lidReason.findUnique({
      where: { id },
    });
  }

  async update(id: number, updateLidReasonDto: UpdateLidReasonDto) {
    return this.prisma.lidReason.update({
      where: { id },
      data: updateLidReasonDto,
    });
  }

  async remove(id: number) {
    return this.prisma.lidReason.delete({
      where: { id },
    });
  }
}
