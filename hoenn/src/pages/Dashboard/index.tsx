import React, { FormEvent, useState } from "react";
import { FiSearch } from 'react-icons/fi'

import api from '../../services/api';

import SearchForm from '../../components/SearchForm';
import Button from '../../components/Button';
import Card from '../../components/Card';
import NewCardModal from '../../components/NewCardModal';

import { Header, Body, CardList, BodyHeader, Outter } from "./style";
import { useEffect } from "react";
import { AxiosResponse } from "axios";

interface Pokemon {
    id: number;
    name: string;
    type: string;
    sprite: string;
}


const Dashboard: React.FC = () => {

    const [pokemon, setPokemon] = useState<Pokemon[]>([]);
    const [loadMore, setLoadMore] = useState('');
    const [search, setSearch] = useState('');
    const [isNewCardModalOpen, setIsNewCarModalOpen] = useState(false);

    const HandleOpenNewCardModal = () => {
        setIsNewCarModalOpen(true);
    }

    const HandleCloseNewCardModal = () => {
        setIsNewCarModalOpen(false);
    }


    const getPokemon = async (response: AxiosResponse<any>, name?: string,) => {

        try {
            setLoadMore(response.data.next);

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
        try {
            fetchMyAPI();
        } catch (error) {
            console.log(error);
        }


    }, []);

    const fetchMyAPI = async () => {
        const response = await api.get(`pokemon?limit=20`);

        getPokemon(response);
    }

    const HandleSearch = async (e: FormEvent) => {
        try {
            e.preventDefault();

            const response = await api.get(`pokemon/${search.toLocaleLowerCase()}`);

            await getPokemon(response, search.toLocaleLowerCase());

            setSearch('');

        } catch (error) {
            console.log(error);
        }
    }

    const HandleLoadMore = async () => {
        try {
            const response = await api.get(loadMore);

            getPokemon(response);

            setLoadMore(response.data.next);
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <>
            <NewCardModal
                isOpen={isNewCardModalOpen}
                onRequestClose={HandleCloseNewCardModal}
            />
            <Outter>
                <Header>
                    <SearchForm
                        fcSubmit={HandleSearch}
                        value={search}
                        onChange={e => setSearch(e.target.value)}
                        icon={FiSearch}
                        name="search"
                        placeholder="Digite aqui a sua busca..."
                    />
                </Header>

                <Body>
                    <BodyHeader>
                        <h1>Resultado da busca</h1>
                        <Button name={"Novo Card"} fcClick={HandleOpenNewCardModal} />
                    </BodyHeader>

                    <CardList>
                        {
                            pokemon.sort((a, b) => (a.id < b.id) ? -1 : 1).map(p => (
                                <Card
                                    key={p.id}
                                    name={p.name.charAt(0).toUpperCase() + p.name.slice(1)}
                                    type={p.type.charAt(0).toUpperCase() + p.type.slice(1)}
                                    imgSrc={p.sprite}
                                />
                            ))
                        }

                    </CardList>
                </Body>

                {
                    loadMore &&
                    <Button name="Carregar Mais" fcClick={HandleLoadMore}>
                        Carregar Mais
                    </Button>
                }

            </Outter>
        </>
    );
};

export default Dashboard;

