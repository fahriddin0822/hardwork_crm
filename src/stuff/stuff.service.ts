import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateStuffDto, UpdateStuffDto } from './dto';

@Injectable()
export class StuffService {
  constructor(private readonly prisma: PrismaService) {}

  async create(createStuffDto: CreateStuffDto) {
    return this.prisma.stuff.create({
      data: {
        first_name: createStuffDto.first_name,
        last_name: createStuffDto.last_name,
        phone_number: createStuffDto.phone_number,
        login: createStuffDto.login,
        password: createStuffDto.password,
        is_active: createStuffDto.is_active,
      },
    });
  }

  async findAll() {
    return this.prisma.stuff.findMany();
  }

  async findOne(id: number) {
    return this.prisma.stuff.findUnique({
      where: { id },
    });
  }

  async update(id: number, updateStuffDto: UpdateStuffDto) {
    return this.prisma.stuff.update({
      where: { id },
      data: updateStuffDto,
    });
  }

  async remove(id: number) {
    return this.prisma.stuff.delete({
      where: { id },
    });
  }
}
