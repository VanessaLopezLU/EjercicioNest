import { PartialType } from '@nestjs/mapped-types';
import { CreateTipoEquipoDto } from './create-tipoEquipo.dto';

export class UpdateTipoEquipoDto extends PartialType(CreateTipoEquipoDto) {

    id_tipo: number;
}