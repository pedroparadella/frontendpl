import React, { FormEvent, useState } from "react";
import { FiSearch } from 'react-icons/fi'

import api from '../../services/api';

import SearchInput from '../../components/SearchInput';
import Button from '../../components/Button';
import Card from '../../components/Card';

import { Header, Body, CardList, BodyHeader } from "./style";
import { useEffect } from "react";

interface Pokemon {
    id: number;
    name: string;
    type: string;
    sprite: string;
}


const Dashboard: React.FC = () => {

    const [pokemon, setPokemon] = useState<Pokemon[]>([]);
    const [search, setSearch] = useState('');

    const getPokemon = async (name?: string) => {

        try {

            const response = name ?
                await api.get(`pokemon/${name}?limit=20`)
                :
                await api.get('pokemon?limit=20');

            if (name) {

                const _pokemon = await getPokemonInfo(name);

                setPokemon([_pokemon]);

            } else {

                response.data.results.map(async (pokemonRes: any) => {

                    const _pokemon = await getPokemonInfo(pokemonRes.name);

                    setPokemon(pokemon => [...pokemon, _pokemon]);

                });
            }

        } catch (error) {
            console.log(error);
        }
    }

    const getPokemonInfo = async (name: string) => {
        try {
            const pokemonInfo = await api.get(`pokemon/${name}`);

            let _pokemon: Pokemon = {
                id: pokemonInfo.data.id,
                name: pokemonInfo.data.name,
                type: pokemonInfo.data.types[0].type.name,
                sprite: pokemonInfo.data.sprites.front_default
            };

            return _pokemon;

        } catch (error) {
            console.log(error);

            let _pokemon: Pokemon = {
                id: 0,
                name: '',
                type: '',
                sprite: ''
            };

            return _pokemon;

        }

    }

    useEffect(() => {
        getPokemon();
    }, []);

    const HandleSearch = async (e: FormEvent) => {
        e.preventDefault();
        console.log(search);

        getPokemon(search);

    }

    return (
        <>
            <Header>
                <form onSubmit={HandleSearch}>
                    <SearchInput
                        value={search}
                        onChange={e => setSearch(e.target.value)}
                        icon={FiSearch}
                        name="search"
                        placeholder="Digite aqui a sua busca..."
                    />
                </form>
            </Header>

            <Body>
                <BodyHeader>
                    <h1>Resultado da busca</h1>
                    <Button name={"Novo Card"} />
                </BodyHeader>

                <CardList>
                    {
                        pokemon.sort().map(p => (
                            <Card
                                key={p.name}
                                name={p.name}
                                type={p.type}
                                imgSrc={p.sprite}
                            />
                        ))
                    }

                </CardList>
            </Body>

        </>
    );
};

export default Dashboard;

