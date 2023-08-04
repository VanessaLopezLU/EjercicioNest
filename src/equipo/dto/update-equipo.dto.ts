import { PartialType } from '@nestjs/mapped-types';
import { EquipoDto } from './create-equipo.dto';

export class UpdateEquipoDto extends PartialType(EquipoDto) {

    id_equipo :number;
}