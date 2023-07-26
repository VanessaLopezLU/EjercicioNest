import { PartialType } from '@nestjs/mapped-types';
import { CreateEstadoprestamoDto } from './create-estadoprestamo.dto';

export class UpdateEstadoprestamoDto extends PartialType(CreateEstadoprestamoDto) {

    id_estadoprestamo: number;
}
