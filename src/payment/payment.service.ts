import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreatePaymentDto, UpdatePaymentDto } from './dto';

@Injectable()
export class PaymentService {
  constructor(private readonly prisma: PrismaService) {}

  async create(createPaymentDto: CreatePaymentDto) {
    return this.prisma.payment.create({
      data: {
        student_id: createPaymentDto.student_id,
        payment_last_date: createPaymentDto.payment_last_date,
        payment_date: createPaymentDto.payment_date,
        price: createPaymentDto.price,
        is_paid: createPaymentDto.is_paid,
        total_attent: createPaymentDto.total_attent,
        studentsId: createPaymentDto.studentsId,
      },
    });
  }

  async findAll() {
    return this.prisma.payment.findMany();
  }

  async findOne(id: number) {
    return this.prisma.payment.findUnique({
      where: { id },
    });
  }

  async update(id: number, updatePaymentDto: UpdatePaymentDto) {
    return this.prisma.payment.update({
      where: { id },
      data: updatePaymentDto,
    });
  }

  async remove(id: number) {
    return this.prisma.payment.delete({
      where: { id },
    });
  }
}
