import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateLidStatusDto, UpdateLidStatusDto } from './dto';

@Injectable()
export class LidStatusService {
  constructor(private readonly prisma: PrismaService) {}

  async create(createLidStatusDto: CreateLidStatusDto) {
    return this.prisma.lidStatus.create({
      data: {
        status: createLidStatusDto.status,
      },
    });
  }

  async findAll() {
    return this.prisma.lidStatus.findMany();
  }

  async findOne(id: number) {
    return this.prisma.lidStatus.findUnique({
      where: { id },
    });
  }

  async update(id: number, updateLidStatusDto: UpdateLidStatusDto) {
    return this.prisma.lidStatus.update({
      where: { id },
      data: updateLidStatusDto,
    });
  }

  async remove(id: number) {
    return this.prisma.lidStatus.delete({
      where: { id },
    });
  }
}
