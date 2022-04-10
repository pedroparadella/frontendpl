export async function searchPokemon(pokemon: string) {
  const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);
  return await response.json();
}
