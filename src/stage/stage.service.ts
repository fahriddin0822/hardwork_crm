import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateStageDto, UpdateStageDto } from './dto';

@Injectable()
export class StageService {
  constructor(private readonly prisma: PrismaService) {}

  async create(createStageDto: CreateStageDto) {
    return this.prisma.stage.create({
      data: {
        name: createStageDto.name,
      },
    });
  }

  async findAll() {
    return this.prisma.stage.findMany();
  }

  async findOne(id: number) {
    return this.prisma.stage.findUnique({
      where: { id },
    });
  }

  async update(id: number, updateStageDto: UpdateStageDto) {
    return this.prisma.stage.update({
      where: { id },
      data: updateStageDto,
    });
  }

  async remove(id: number) {
    return this.prisma.stage.delete({
      where: { id },
    });
  }
}
