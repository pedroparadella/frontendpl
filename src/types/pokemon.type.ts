export interface PokemonType {
  id: number;
  name: string;
  sprites: PokemonSprites;
  types: PokemonTypes[];
}

interface PokemonSprites {
  front_default: string;
  front_shiny: string;
}

interface PokemonTypes {
  type: PokemonTypeName;
}

interface PokemonTypeName {
  name: string;
}
