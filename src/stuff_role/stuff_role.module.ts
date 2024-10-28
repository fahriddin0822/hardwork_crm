import { Module } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { PrismaModule } from '../prisma/prisma.module';
import { StaffRoleController } from './stuff_role.controller';
import { StaffRoleService } from './stuff_role.service';

@Module({
  imports: [PrismaModule],
  controllers: [StaffRoleController],
  providers: [StaffRoleService],
})
export class StaffRoleModule {}
