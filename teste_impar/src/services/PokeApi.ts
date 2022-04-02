import { Dispatch, SetStateAction } from 'react';
import axios, { AxiosResponse } from 'axios';
import { IPokemon } from '../models/pokemon';

export const getPokemon = (text: string, callback: Dispatch<SetStateAction<IPokemon[]>>) => {
    axios.get<IPokemon>('https://pokeapi.co/api/v2/pokemon/' + text.toLowerCase())
        .then((response: AxiosResponse) => {
            const result: IPokemon = {
                id: response.data.id,
                name: response.data.name,
                front_default: response.data.sprites.front_default,
            };

            callback([result]);
        })
        .catch(error => {
            console.log("Error from PokeApi: ", error);
        });
}

export const getPokemonList = (callback: Dispatch<SetStateAction<IPokemon[]>>) => {
    axios.get<IPokemon[]>('https://pokeapi.co/api/v2/pokemon?limit=151')
        .then((response: AxiosResponse) => {
            const pokemonListAxios: IPokemon[] = [];

            response.data.results.map((pokemon: any) => {
                axios.get(pokemon.url).then((response: AxiosResponse) => {
                    const result: IPokemon = {
                        id: response.data.id,
                        name: response.data.name,
                        front_default: response.data.sprites.front_default,
                    };

                    pokemonListAxios.push(result);
                });
            });

            callback(pokemonListAxios);
        })
        .catch(error => {
            console.log("Error from PokeApi: ", error);
        });
}