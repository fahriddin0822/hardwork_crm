import { IsNotEmpty, IsOptional, IsString } from "class-validator";

export class CreateStaffDto {

  @IsNotEmpty()
  @IsString()
  first_name: string;

  @IsOptional()
  @IsString()
  last_name: string;

  @IsNotEmpty()
  @IsString()
  phone_number: string;

  @IsNotEmpty()
  @IsString()
  login: string;

  @IsNotEmpty()
  @IsString()
  password: string;

  @IsNotEmpty()
  @IsString()
  confirm_password: string;

  @IsNotEmpty()
  @IsString()
  readonly role: string
}
