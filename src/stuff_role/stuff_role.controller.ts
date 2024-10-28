import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { StaffRoleService } from './stuff_role.service';
import { CreateStaffRoleDto, UpdateStaffRoleDto } from './dto';


@Controller('staff-role')
export class StaffRoleController {
  constructor(private readonly staffRoleService: StaffRoleService) {}

  @Post()
  create(@Body() createStaffRoleDto: CreateStaffRoleDto) {
    return this.staffRoleService.create(createStaffRoleDto);
  }

  @Get()
  findAll() {
    return this.staffRoleService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.staffRoleService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateStaffRoleDto: UpdateStaffRoleDto) {
    return this.staffRoleService.update(+id, updateStaffRoleDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.staffRoleService.remove(+id);
  }
}
