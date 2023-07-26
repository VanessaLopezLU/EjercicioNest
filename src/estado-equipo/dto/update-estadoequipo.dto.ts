import { PartialType } from '@nestjs/mapped-types';
import { CreateEstadoEquipoDto } from './create-estadoequipo.dto';

export class UpdateEstadoEquipoDto extends PartialType(CreateEstadoEquipoDto) {

    id_estado: number;
}
