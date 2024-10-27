import { IsNotEmpty, IsString } from "class-validator";

export class CreateLidStatusDto {

    @IsNotEmpty()
    @IsString()
    status:string

}
