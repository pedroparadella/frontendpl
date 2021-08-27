import React, { FormEvent } from "react";
import { FiSearch } from 'react-icons/fi'

import SearchInput from '../../components/SearchInput';
import Button from '../../components/Button';
import Card from '../../components/Card';

import { Header, Body, CardList, BodyHeader } from "./style";

const Dashboard: React.FC = () => {
    const HandleSubmit = (e: FormEvent) => {
        e.preventDefault();
        console.log("Submit teste");
    }
    return (
        <>

            <Header>
                <form onSubmit={HandleSubmit}>
                    <SearchInput icon={FiSearch} name="search" placeholder="Digite aqui a sua busca..." />
                </form>
            </Header>

            <Body>
                <BodyHeader>
                    <h1>Resultado da busca</h1>
                    <Button name={"Novo Card"} />
                </BodyHeader>

                <CardList>
                    <Card name="Pikachu" type="Electric" imgSrc="https://i1.wp.com/www.multarte.com.br/wp-content/uploads/2019/03/pikachu.png?resize=290%2C292&ssl=1" />
                    <Card name="Charmander" type="Fire" imgSrc="https://assets.pokemon.com/assets/cms2/img/pokedex/full/004.png" />
                    <Card name="Squirtle" type="Water" imgSrc="https://assets.pokemon.com/assets/cms2/img/pokedex/full/007.png" />
                </CardList>
            </Body>

        </>
    );
};

export default Dashboard;

