import { EntitySchema } from 'typeorm';
import { User } from './user.entity';

export const UserSchema = new EntitySchema<User>({
  name: 'User',
  target: User,
  columns: {
    Cedula: {
      type: Number,
      primary: true,
      generated: true,
    },
    Nombre: {
      type: String,
    },
},
});