import { EntityPokemon } from "../Services/PokemonService";


const initialState = {
    pokemon_list:new Array<EntityPokemon>(),
    pokemon_last_page:0
}

const PokemonReducer = (state = initialState, action:any) =>{
    
    switch(action.type){
        case 'pokemon-list':
            return {...state,pokemon_list:action.payload.results,pokemon_last_page:Math.floor(action.payload.count/30)}
        case 'search-pokemon':
            let array = new Array<EntityPokemon>();
            let pokeEntity = new EntityPokemon();
            pokeEntity.name = action.payload.name;
            pokeEntity.url = action.payload.forms[0].url;
            array.push(pokeEntity);
            return {...state,pokemon_list:array,pokemon_last_page:-1}
        default:
            return state;
    }
}

export default PokemonReducer;