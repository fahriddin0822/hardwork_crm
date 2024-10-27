import { Module } from '@nestjs/common';
import { LidService } from './lid.service';
import { LidController } from './lid.controller';

@Module({
  controllers: [LidController],
  providers: [LidService],
})
export class LidModule {}
