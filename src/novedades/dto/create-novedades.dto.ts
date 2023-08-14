import { IsInt, IsNotEmpty, IsString } from 'class-validator';


export class CreateNovedadesDto {
    @IsString()
    @IsNotEmpty()
    descripcion: string;

    @IsString()
    @IsNotEmpty()
    fechaNovedad: string;

    @IsString()
    @IsNotEmpty()
    tipoNovedad: string;

    @IsInt()
    @IsNotEmpty()
    id_prestamo

}