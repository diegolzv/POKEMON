import { Injectable, NotFoundException } from '@nestjs/common';

import { Maestro } from './../entities/mastro.entity';
import { CreateMaestroDto } from './../dtos/maestros.dtos';
import { Pokemon } from '../entities/pokemon.entity'

import { PokemonesService } from './../services/pokemon.service';

@Injectable()
export class MaestroService {

  constructor(private pokemonesService: PokemonesService) {}

  private counterId = 1;
  private maestros: Maestro[] = [
    {
      id: 1,
      name: 'diego zuniga',
      age: '31'
    },
  ];

  findAll() {
    return this.maestros;
  }

  findOne(id: number) {
    const maestroid = this.maestros.find((item) => item.id === id);
    if (!maestroid) {
      throw new NotFoundException(`Product #${id} not found`);
    }
    return maestroid
  }

  create(data: CreateMaestroDto) {
    this.counterId = this.counterId + 1;
    const newProduct = {
      id: this.counterId,
      ...data,
    };
    this.maestros.push(newProduct);
    return newProduct;
  }

  remove(id: number) {
    const index = this.maestros.findIndex((item) => item.id === id);
    if (index === -1) {
      throw new NotFoundException(`Product #${id} not found`);
    }
    this.maestros.splice(index, 1);
    return true;
  }

  // obtener todos los maestros pokemones con sus pokemones
  getPokemonByMaestro(id: number): Pokemon[] {
    const buscarM = this.findOne(id);
    return this.pokemonesService.findOneForMaestro(buscarM.id);
  }
}
