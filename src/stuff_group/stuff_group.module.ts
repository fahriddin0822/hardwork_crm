import { Module } from '@nestjs/common';
import { StuffGroupService } from './stuff_group.service';
import { StuffGroupController } from './stuff_group.controller';
import { PrismaService } from '../prisma/prisma.service';
import { PrismaModule } from '../prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  controllers: [StuffGroupController],
  providers: [StuffGroupService],
})
export class StuffGroupModule {}
