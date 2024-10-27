import { Module } from '@nestjs/common';
import { StuffRoleService } from './stuff_role.service';
import { StuffRoleController } from './stuff_role.controller';

@Module({
  controllers: [StuffRoleController],
  providers: [StuffRoleService],
})
export class StuffRoleModule {}
