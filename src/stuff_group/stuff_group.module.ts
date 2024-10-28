import { Module } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { PrismaModule } from '../prisma/prisma.module';
import { StaffGroupController } from './stuff_group.controller';
import { StaffGroupService } from './stuff_group.service';

@Module({
  imports: [PrismaModule],
  controllers: [StaffGroupController],
  providers: [StaffGroupService],
})
export class StaffGroupModule {}
