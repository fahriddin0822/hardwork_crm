import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { LidReasonService } from './lid_reason.service';
import { CreateLidReasonDto } from './dto/create-lid_reason.dto';
import { UpdateLidReasonDto } from './dto/update-lid_reason.dto';

@Controller('lid-reason')
export class LidReasonController {
  constructor(private readonly lidReasonService: LidReasonService) {}

  @Post()
  create(@Body() createLidReasonDto: CreateLidReasonDto) {
    return this.lidReasonService.create(createLidReasonDto);
  }

  @Get()
  findAll() {
    return this.lidReasonService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.lidReasonService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateLidReasonDto: UpdateLidReasonDto) {
    return this.lidReasonService.update(+id, updateLidReasonDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.lidReasonService.remove(+id);
  }
}
