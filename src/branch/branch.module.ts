import { Global, Module } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { BranchController } from './branch.controller';
import { PrismaModule } from '../prisma/prisma.module';
import { BranchService } from './branch.service';

@Global()
@Module({
  imports:[PrismaModule],
  controllers:[BranchController],
  providers: [ BranchService],
  exports: [BranchService]
})
export class BranchModule {}
