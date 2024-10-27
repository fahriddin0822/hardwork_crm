import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateTargetDto, UpdateTargetDto } from './dto';

@Injectable()
export class TargetService {
  constructor(private readonly prisma: PrismaService) {}

  async create(createTargetDto: CreateTargetDto) {
    return this.prisma.target.create({
      data: {
        name: createTargetDto.name,
      },
    });
  }

  async findAll() {
    return this.prisma.target.findMany();
  }

  async findOne(id: number) {
    return this.prisma.target.findUnique({
      where: { id },
    });
  }

  async update(id: number, updateTargetDto: UpdateTargetDto) {
    return this.prisma.target.update({
      where: { id },
      data: updateTargetDto,
    });
  }

  async remove(id: number) {
    return this.prisma.target.delete({
      where: { id },
    });
  }
}
