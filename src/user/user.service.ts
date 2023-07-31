import { Injectable} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './user.entity';
import { Repository } from 'typeorm';
import { UserDto } from './dto/User.dto';



@Injectable()
export class UserService {constructor(
    @InjectRepository(User)
    private Usertabla: Repository<User>  
    ){}


   async CrearUser(UserDto:UserDto){
    let Noexiste = await this.ValidarQueNoExista(UserDto);
    if(Noexiste){
        return await this.Usertabla.insert(UserDto);
    }
    return 'Ya Existe';
   }

   async ObtenerUser(){
    return await this.Usertabla.find();
   }

   async ValidarQueNoExista(UsuarioC:UserDto){
    return await this.Usertabla.findOne({ where: {Cedula:UsuarioC.Cedula}}).then((resp) =>{
        if(resp == null){
            return true;
        }
        return false;
    });
   }
   async eliminarUser(cedula:number){
    return await this.Usertabla.delete({Cedula:cedula});
   }
   async actualizarUser(UserActualizar:UserDto){
    return await this.Usertabla.update({Cedula:UserActualizar.Cedula},UserActualizar);
   }
}

