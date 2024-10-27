import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateBranchDto, UpdateBranchDto } from './dto';

@Injectable()
export class BranchService {
  constructor(private readonly prisma: PrismaService) {}

  async create(createBranchDto: CreateBranchDto) {
    return this.prisma.branch.create({
      data: {
        name:createBranchDto.name,
        address:createBranchDto.address,
        call_numer:createBranchDto.call_number,
      },
    });
  }

  async findAll() {
    return this.prisma.branch.findMany();
  }

  async findOne(id: number) {
    return this.prisma.branch.findUnique({
      where: { id },
    });
  }

  async update(id: number, updateBranchDto: UpdateBranchDto) {
    return this.prisma.branch.update({
      where: { id },
      data: updateBranchDto,
    });
  }

  async remove(id: number) {
    return this.prisma.branch.delete({
      where: { id },
    });
  }
}
