import {
  Controller,
  Get,
  Query,
  Param,
  Post,
  Body,
  Put,
  Delete,
  HttpStatus,
  HttpCode,
  Res,
  // ParseIntPipe,
} from '@nestjs/common';
import { Response } from 'express';
import { ApiTags, ApiOperation } from '@nestjs/swagger';

import { ParseIntPipe } from '../../common/parse-int.pipe';
import { CreateMaestroDto } from '../dtos/maestros.dtos';
import { MaestroService } from './../services/maestros.services';

@ApiTags('maestros')
@Controller('maestro')
export class MaestrosController {
  constructor(private maestroService: MaestroService) {}

  @Get()
  @ApiOperation({ summary: 'List of Maestros' })
  getProducts(
    @Query('limit') limit = 100,
    @Query('offset') offset = 0,
    @Query('brand') brand: string,
  ) {
    // return {
    //   message: `products limit=> ${limit} offset=> ${offset} brand=> ${brand}`,
    // };
    return this.maestroService.findAll();
  }

  @Post()
  create(@Body() payload: CreateMaestroDto) {
    return this.maestroService.create(payload);
  }

  @Delete(':id')
  delete(@Param('id') id: string) {
    return this.maestroService.remove(+id);
  }

  @Get(':id')
  getPokemonByMaestro(@Param('id') id: string) {
    return this.maestroService.getPokemonByMaestro(+id);
  }
}

