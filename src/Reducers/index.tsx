import { combineReducers } from 'redux';
import PokemonReducer from './PokemonReducer';

export const Reducers = combineReducers({
    pokemon:PokemonReducer,
});