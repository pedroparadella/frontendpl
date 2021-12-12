export const NewPokemonList = (value:any) => ({
    type: 'pokemon-list',
    payload:value
});

export const Search = (value:any) => ({
    type: 'search-pokemon',
    payload:value
});