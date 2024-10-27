import { Decimal } from "@prisma/client/runtime/library";

export class CreatePaymentDto {
  student_id: number;
  payment_last_date: string;
  payment_date: Date;
  price: Decimal;
  is_paid: boolean;
  total_attent: number;
  studentsId?: number;
}
