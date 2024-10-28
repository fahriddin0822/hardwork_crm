import { PartialType } from '@nestjs/mapped-types';
import { CreateStaffGroupDto } from './create-stuff_group.dto';

export class UpdateStaffGroupDto extends PartialType(CreateStaffGroupDto) {}
