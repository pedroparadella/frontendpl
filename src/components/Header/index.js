import React, { useState } from "react";
import * as S from './styles'

//images
import logoTeste from '../../assets/images/logo-teste.png'
import lupa from '../../assets/images/lupa.png'


const Header = ({ setIsSearching, handleSearch, setPage, allPokemons }) => {
    const [search, setSearch] = useState('');
    const [sugestion, setSugestion] = useState([]);


    const handleChange = (e) => {
            setSearch(e.target.value);
            if (e.target.value.length > 2) {
                const filtered = allPokemons.filter(item => item.name.toLowerCase().includes(e.target.value.toLowerCase()));
                setSugestion(filtered);
            }

            if (e.target.value === '' ) {
                setIsSearching(false);
                setPage(0);
                setSearch('');
                setSugestion([]);

            }
    }

    const handleClick = (ev, isSugestion, value) => {
        ev.preventDefault();
        if(isSugestion){
            handleSearch(value, isSugestion);
            setIsSearching(true);

            return
        }
        handleSearch(search, isSugestion);
        setIsSearching(true);
        setSugestion([]);
    }

    const handleClickSugestion = (ev, value) => {
        ev.preventDefault();
        setSearch(value);
        setIsSearching(true);
        handleClick(ev, true, value);
        setSugestion([]);

    }


    const renderSugestionList = () => {
        return (
            <S.SugestionList>
                {sugestion.map(item => (
                    <S.Sugestion key={item.name} onClick={(ev) => handleClickSugestion(ev, item.name)}  >
                        {item.name.replace(/-/g, ' ')}
                    </S.Sugestion>
                ))}
            </S.SugestionList>
        )
    }


    return (
        <S.Container>
            <S.TopBox>
                <S.Logo src={logoTeste} alt="Logo" />
            </S.TopBox>
            <S.SearchBox>
                <S.Input placeholder="Digite aqui sua busca..." value={search} onChange={handleChange} />
                <S.Button disabled={search === ''} onClick={handleClick} >
                    <S.Lupa src={lupa} alt="Lupa" />
                </S.Button>
            </S.SearchBox>
            {sugestion.length > 0 && renderSugestionList()}
        </S.Container>
    )
}

export default Header;