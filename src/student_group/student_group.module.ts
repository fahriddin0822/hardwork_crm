import { Module } from '@nestjs/common';
import { StudentGroupService } from './student_group.service';
import { StudentGroupController } from './student_group.controller';
import { PrismaService } from '../prisma/prisma.service';
import { PrismaModule } from '../prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  controllers: [StudentGroupController],
  providers: [StudentGroupService],
})
export class StudentGroupModule {}
