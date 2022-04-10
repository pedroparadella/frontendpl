export interface PokemonType {
  id: number;
  name: string;
  sprites: PokemonSpritesType
}

interface PokemonSpritesType {
  front_default: string;
  front_shiny: string
}
