import { Module } from '@nestjs/common';
import { LidStatusModule } from './lid_status/lid_status.module';
import { LidReasonModule } from './lid_reason/lid_reason.module';
import { RoleModule } from './role/role.module';
import { BranchModule } from './branch/branch.module';
import { PrismaModule } from './prisma/prisma.module';
import { StageModule } from './stage/stage.module';
import { StudentsModule } from './students/students.module';
import { StudentGroupModule } from './student_group/student_group.module';
import { LessonsModule } from './lessons/lessons.module';
import { StudentLessonModule } from './student_lesson/student_lesson.module';
import { StuffRoleModule } from './stuff_role/stuff_role.module';
import { StuffModule } from './stuff/stuff.module';
import { StuffGroupModule } from './stuff_group/stuff_group.module';
import { GroupModule } from './group/group.module';
import { LidModule } from './lid/lid.module';
import { PaymentModule } from './payment/payment.module';
import { TargetModule } from './target/target.module';
import { PrismaService } from './prisma/prisma.service';

@Module({
  imports: [LidStatusModule, LidReasonModule, RoleModule, BranchModule, PrismaModule, StageModule, StudentsModule, StudentGroupModule, LessonsModule, StudentLessonModule, StuffRoleModule, StuffModule, StuffGroupModule, GroupModule, LidModule, PaymentModule, TargetModule],
  providers: [PrismaService],
  exports: [PrismaService]
})
export class AppModule { }
