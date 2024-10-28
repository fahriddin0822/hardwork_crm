import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateStaffDto, UpdateStaffDto } from './dto';
import { NotFoundError, throwError } from 'rxjs';
import * as bcrypt from 'bcrypt'

@Injectable()
export class StaffService {
  constructor(private readonly prismaService: PrismaService) { }

  async create(createStaffDto: CreateStaffDto) {

    const candidate = await this.prismaService.staff.findUnique({
      where: { login: createStaffDto.login }
    });

    if (candidate) {
      throw new BadRequestException("This staff is exists.")
    }

    if (createStaffDto.password !== createStaffDto.confirm_password) {
      throw new BadRequestException("Passwords not matched.")
    }

    const role = await this.prismaService.role.findUnique({
      where: { name: createStaffDto.role }
    });

    if (!role) {
      throw new NotFoundException("Role not found.");
    }

    const hashed_password = await bcrypt.hash(createStaffDto.password, 7);

    return this.prismaService.staff.create({
      data: {
        first_name: createStaffDto.first_name,
        last_name: createStaffDto.last_name,
        phone_number: createStaffDto.phone_number,
        login: createStaffDto.login,
        hashed_password,
        StaffRole: {
          create: [{ roleId: role.id }]
        }
      },
    });
  }

  async findAll() {
    return this.prismaService.staff.findMany({
      include: { StaffRole: { include: { role: true } } }
    });
  }

  async findOne(id: number) {
    return this.prismaService.staff.findUnique({
      where: { id },
    });
  }

  async update(id: number, updateStaffDto: UpdateStaffDto) {
    return this.prismaService.staff.update({
      where: { id },
      data: updateStaffDto,
    });
  }

  async remove(id: number) {
    return this.prismaService.staff.delete({
      where: { id },
    });
  }
}
