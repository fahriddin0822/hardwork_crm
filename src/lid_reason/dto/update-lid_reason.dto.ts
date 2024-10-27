import { PartialType } from '@nestjs/mapped-types';
import { CreateLidReasonDto } from './create-lid_reason.dto';

export class UpdateLidReasonDto extends PartialType(CreateLidReasonDto) {}
