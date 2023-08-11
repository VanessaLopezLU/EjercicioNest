
import { IsNotEmpty, IsInt, IsString } from "class-validator";
import { Roles } from "src/roles/entities/Roles.entity";
export class UserDto {

    @IsInt()
    @IsNotEmpty()
    Cedula: number;

    @IsString()
    @IsNotEmpty()
    Nombre: string;

    @IsString()
    @IsNotEmpty()
    Apellido: string;

    @IsString()
    @IsNotEmpty()
    Correo: string;

    @IsInt()
    @IsNotEmpty()
    Telefone: number;

    @IsString()
    @IsNotEmpty()
    Usuario: string;

    @IsString()
    @IsNotEmpty()
    Contrasena: string;

    @IsInt()
    @IsNotEmpty()
    id_rol: Roles;
}