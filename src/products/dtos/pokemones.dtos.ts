import { IsString, IsUrl, IsNotEmpty } from 'class-validator';
import { PartialType } from '@nestjs/swagger';

export class CreatePokemonDto {
  @IsString()
  @IsNotEmpty()
  readonly name: string;

  @IsUrl()
  @IsNotEmpty()
  readonly image: string;


  @IsString()
  @IsNotEmpty()
  readonly type: string;

  @IsNotEmpty()
  readonly maestro: number;
}

export class UpdatePokemonDto extends PartialType(CreatePokemonDto) {}
