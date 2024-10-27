import { Module } from '@nestjs/common';
import { LidReasonService } from './lid_reason.service';
import { LidReasonController } from './lid_reason.controller';
import { PrismaModule } from '../prisma/prisma.module';

@Module({
  imports:[PrismaModule],
  controllers: [LidReasonController],
  providers: [LidReasonService],
  exports:[LidReasonService],
})
export class LidReasonModule {}
