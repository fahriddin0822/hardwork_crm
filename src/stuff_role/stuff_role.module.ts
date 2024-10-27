import { Module } from '@nestjs/common';
import { StuffRoleService } from './stuff_role.service';
import { StuffRoleController } from './stuff_role.controller';
import { PrismaService } from '../prisma/prisma.service';
import { PrismaModule } from '../prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  controllers: [StuffRoleController],
  providers: [StuffRoleService],
})
export class StuffRoleModule {}
