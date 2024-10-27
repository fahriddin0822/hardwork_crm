import { Module } from '@nestjs/common';
import { RoleService } from './role.service';
import { RoleController } from './role.controller';
import { PrismaModule } from '../prisma/prisma.module';
import { PrismaService } from '../prisma/prisma.service';

@Module({
  imports:[PrismaModule],
  controllers: [RoleController],
  providers: [RoleService],
})
export class RoleModule {}
