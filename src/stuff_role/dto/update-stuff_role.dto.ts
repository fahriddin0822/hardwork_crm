import { PartialType } from '@nestjs/mapped-types';
import { CreateStaffRoleDto } from './create-stuff_role.dto';

export class UpdateStaffRoleDto extends PartialType(CreateStaffRoleDto) {}
