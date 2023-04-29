import {
  Controller,
  Get,
  Param,
  Post,
  Body,
  Put,
  Delete,
  ParseIntPipe,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { PokemonesService } from '../services/pokemon.service';
import { UpdatePokemonDto } from '../dtos/pokemones.dtos'

@ApiTags('pokemon')
@Controller('pokemones')
export class PokemonesController {
  constructor(private pokemonesService: PokemonesService) {}

  @Get()
  findAll() {
    return this.pokemonesService.findAll();
  }

  @Get(':type')
  get(@Param('type') type: string) {
    return this.pokemonesService.find(type);
  }

  @Put(':id')
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() payload: UpdatePokemonDto
  ) {
    return this.pokemonesService.update(id, payload);
  }

}
