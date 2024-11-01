import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateRoleDto, UpdateRoleDto } from './dto';

@Injectable()
export class RoleService {
  constructor(private readonly prisma: PrismaService) { }

  async create(createRoleDto: CreateRoleDto) {
    return this.prisma.role.create({
      data: {
        name: createRoleDto.name,
      },
    });
  }

  async findAll() {
    return this.prisma.role.findMany({
      include: { StaffRole: { include: { staff: true } } },
    });
  }  

  async findOne(id: number) {
    return this.prisma.role.findUnique({
      where: { id },
    });
  }

  async update(id: number, updateRoleDto: UpdateRoleDto) {
    return this.prisma.role.update({
      where: { id },
      data: updateRoleDto,
    });
  }

  async remove(id: number) {
    return this.prisma.role.delete({
      where: { id },
    });
  }
}
