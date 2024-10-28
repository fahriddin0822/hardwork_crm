import { Module } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { PrismaModule } from '../prisma/prisma.module';
import { StaffService } from './staff.service';
import { StaffController } from './staff.controller';

@Module({
  imports: [PrismaModule],
  controllers: [StaffController],
  providers: [StaffService],
})
export class StaffModule {}
