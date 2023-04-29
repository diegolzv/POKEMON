/* eslint-disable prettier/prettier */
import { Injectable, NotFoundException } from '@nestjs/common';
import { Pokemon } from '../entities/pokemon.entity';
import { UpdatePokemonDto } from './../dtos/pokemones.dtos';

@Injectable()
export class PokemonesService {
  private pokemones: Pokemon[] = [
    {
      id: 1,
      name: 'Bulbasaur 1',
      type: 'Planta',
      image: 'https://static.wikia.nocookie.net/espokemon/images/4/43/Bulbasaur.png/revision/latest?cb=20170120032346',
      maestro: 1,
    },
    {
      id: 2,
      name: 'Ivysaur',
      type: 'Planta',
      image: 'https://static.wikia.nocookie.net/espokemon/images/8/86/Ivysaur.png/revision/latest?cb=20140207202404',
      maestro: null,
    },
    {
      id: 3,
      name: 'Venusaur',
      type: 'Planta',
      image: 'https://static.wikia.nocookie.net/espokemon/images/b/be/Venusaur.png/revision/latest?cb=20160309230456',
      maestro: null,
    },
    {
      id: 4,
      name: 'Charmander',
      type: 'Fuego',
      image: 'https://static.wikia.nocookie.net/espokemon/images/5/56/Charmander.png/revision/latest?cb=20221210013209',
      maestro: null,
    },
    {
      id: 5,
      name: 'Charmeleon',
      type: 'Fuego',
      image: 'https://static.wikia.nocookie.net/espokemon/images/f/fb/Charmeleon.png/revision/latest?cb=20140207202536',
      maestro: null,
    },
    {
      id: 6,
      name: 'Charizard',
      type: 'Fuego',
      image: 'https://static.wikia.nocookie.net/espokemon/images/9/95/Charizard.png/revision/latest?cb=20180325003352',
      maestro: null,
    },
    {
      id: 7,
      name: 'Squirtle',
      type: 'Agua',
      image: 'https://static.wikia.nocookie.net/espokemon/images/e/e3/Squirtle.png/revision/latest/scale-to-width-down/350?cb=20160309230820',
      maestro: null,
    },
    {
      id: 8,
      name: 'Wartortle',
      type: 'Agua',
      image: 'https://static.wikia.nocookie.net/espokemon/images/d/d7/Wartortle.png/revision/latest?cb=20140207202657',
      maestro: null,
    },
    {
      id: 9,
      name: 'Blastoise',
      type: 'Agua',
      image: 'https://static.wikia.nocookie.net/espokemon/images/4/41/Blastoise.png/revision/latest?cb=20220608115725',
      maestro: null,
    },
    {
      id: 10,
      name: 'Caterpie',
      type: 'Bicho',
      image: 'https://static.wikia.nocookie.net/espokemon/images/0/05/Caterpie.png/revision/latest?cb=20170615202446',
      maestro: 1,
    },
    {
      id: 11,
      name: 'Metapod',
      type: 'Bicho',
      image: 'https://static.wikia.nocookie.net/espokemon/images/6/6b/Metapod.png/revision/latest?cb=20080723091759',
      maestro: null,
    },
    {
      id: 12,
      name: 'Butterfree',
      type: 'Bicho',
      image: 'https://static.wikia.nocookie.net/espokemon/images/9/96/Butterfree.png/revision/latest/scale-to-width-down/350?cb=20160703192952',
      maestro: null,
    },

    {
      id: 13,
      name: 'Weedle',
      type: 'Bicho',
      image: 'https://static.wikia.nocookie.net/espokemon/images/d/d6/Weedle.png/revision/latest?cb=20080723091802',
      maestro: null,
    },
    {
      id: 14,
      name: 'Kakuna',
      type: 'Bicho',
      image: 'https://static.wikia.nocookie.net/espokemon/images/6/63/Kakuna.png/revision/latest?cb=20080723091803',
      maestro: null,
    },
    {
      id: 15,
      name: 'Beedrill',
      type: 'Bicho',
      image: 'https://static.wikia.nocookie.net/espokemon/images/0/0d/Beedrill.png/revision/latest/scale-to-width-down/350?cb=20141214194600',
      maestro: null,
    },
    {
      id: 16,
      name: 'Pidgey',
      type: 'Normal',
      image: 'https://static.wikia.nocookie.net/espokemon/images/b/b7/Pidgey.png/revision/latest?cb=20080719192400',
      maestro: 1,
    },
    {
      id: 17,
      name: 'Pidgeotto',
      type: 'Normal',
      image: 'https://static.wikia.nocookie.net/espokemon/images/5/57/Pidgeotto.png/revision/latest/scale-to-width-down/350?cb=20141214195017',
      maestro: 1,
    },
    {
      id: 18,
      name: 'Pidgeot',
      type: 'Normal',
      image: 'https://static.wikia.nocookie.net/espokemon/images/a/a9/Pidgeot.png/revision/latest/scale-to-width-down/350?cb=20141214190416',
      maestro: null,
    },
    {
      id: 19,
      name: 'Rattata',
      type: 'Normal',
      image: 'https://static.wikia.nocookie.net/espokemon/images/c/c4/Rattata.png/revision/latest?cb=20080723091810',
      maestro: null,
    },
    {
      id: 20,
      name: 'Raticate',
      type: 'Normal',
      image: 'https://static.wikia.nocookie.net/espokemon/images/d/d6/Raticate.png/revision/latest?cb=20080723091809',
      maestro: null,
    },
    {
      id: 21,
      name: 'Pikachu',
      type: 'Eléctrico',
      image: 'https://static.wikia.nocookie.net/espokemon/images/7/77/Pikachu.png/revision/latest/scale-to-width-down/350?cb=20150621181250',
      maestro: 1,
    },
    {
      id: 22,
      name: 'Raichu',
      type: 'Eléctrico',
      image: 'https://static.wikia.nocookie.net/espokemon/images/3/34/Raichu.png/revision/latest/scale-to-width-down/350?cb=20160815220038',
      maestro: null,
    },
  ];

  //lista de pokemones
  findAll() {
    return this.pokemones;
  }

  //trae por tipo de pokemon
  find(type: string) {
    const pokemon = this.pokemones.filter((item) => item.type === type);
    if (!pokemon) {
      throw new NotFoundException(`type #${type} not found`);
    }
    return pokemon;
  }

  //busca pokemon por id
  findOne(id: number) {
    const poke = this.pokemones.find((item) => item.id === id);
    if (!poke) {
      throw new NotFoundException(`Brand #${id} not found`);
    }
    return poke;
  }

  //Asociar este pokemon a entrenador
  update(id: number, changes: UpdatePokemonDto) {
    const poke = this.findOne(id);
    const index = this.pokemones.findIndex((item) => item.id === id);

    this.pokemones[index] = {
      ...poke,
      ...changes,
    };
    return this.pokemones[index];
  }

  //Buscar pokemon para maestro
  findOneForMaestro(id: number) {
    const poke = this.pokemones.filter((item) => item.maestro === id);
    if (!poke) {
      throw new NotFoundException(`Brand #${id} not found`);
    }
    return poke;
  }
}
