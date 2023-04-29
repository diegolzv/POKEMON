import { Module } from '@nestjs/common';
import { PokemonesService } from './services/pokemon.service';
import { PokemonesController} from './controllers/pokemones.controller';

import { MaestroService } from './services/maestros.services';
import { MaestrosController} from './controllers/maestros.controller';


@Module({
  controllers: [PokemonesController, MaestrosController],
  providers: [PokemonesService, MaestroService],
  exports: [],
})
export class ProductsModule {}
