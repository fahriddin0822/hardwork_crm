export class CreateGroupDto {
    group_name: string;
    lesson_start_time: string;
    lesson_continuous: string;
    lesson_week_day: string[];
    group_stage_id: number;
    room_number: string;
    room_floor: number;
    branch_id: number;
    lessons_quant: number;
    is_active: boolean;
  }
  