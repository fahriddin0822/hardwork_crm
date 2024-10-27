import { Module } from '@nestjs/common';
import { StuffGroupService } from './stuff_group.service';
import { StuffGroupController } from './stuff_group.controller';

@Module({
  controllers: [StuffGroupController],
  providers: [StuffGroupService],
})
export class StuffGroupModule {}
