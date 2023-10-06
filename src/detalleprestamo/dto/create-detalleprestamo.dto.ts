import { IsInt, IsNotEmpty, IsString } from 'class-validator';

export class CreateDetallePrestamoDto {
    @IsInt()
    @IsNotEmpty()
    id : number
}
