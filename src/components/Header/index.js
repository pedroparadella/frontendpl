import React, {useState} from "react";
import * as S from './styles'

//images
import logoTeste from '../../assets/images/logo-teste.png'
import lupa from '../../assets/images/lupa.png'


const Header = ({setIsSearching, handleSearch, handleFetch, setPage}) => {
    const [search, setSearch] = useState('');

    const handleChange = (e) => {
        setSearch(e.target.value);

        if(e.target.value === ''){
        setIsSearching(false);
        setPage(0);
        setSearch('');
        
    }
    }

    const handleClick = (ev) => {
        ev.preventDefault();
        handleSearch(search);
        setIsSearching(true);
    }

    return(
        <S.Container>
            <S.TopBox>
                <S.Logo src={logoTeste} alt="Logo"/>
            </S.TopBox>
            <S.SearchBox>
                <S.Input placeholder="Digite aqui sua busca..."  onChange={handleChange} />
                <S.Button disabled={search === ''}  onClick={handleClick} >
                    <S.Lupa src={lupa} alt="Lupa"/>
                </S.Button>
            </S.SearchBox>
        </S.Container>
    )
}

export default Header;