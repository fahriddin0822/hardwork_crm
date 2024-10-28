import { PartialType } from '@nestjs/mapped-types';
import { CreateStaffDto } from './create-stuff.dto';

export class UpdateStaffDto extends PartialType(CreateStaffDto) {}
