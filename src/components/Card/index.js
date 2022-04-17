import React, { useState, useEffect } from "react";
import * as S from './styles'
import axios from "axios";

//images
import edit from '../../assets/icons/edit.svg'
import trash from '../../assets/icons/trash.svg'


const Card = ({ data, handleDisabladButtons }) => {
    const [pokemon, setPokemon] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [isOpened, setIsOpened] = useState('');

    useEffect(() => {
        setIsLoading(true);
        axios.get(data.url)
            .then(res => {
                setPokemon(res.data)
                setIsLoading(false)

            })
    }, [data])

    const handleFlip = (id) => {
        setIsOpened(id)
    }

    const handleClose = () => {
        setTimeout(setIsOpened(''), 5000)
    }

    return (
        <S.Container >
            <S.InnerCard flip={isOpened === pokemon.id}>
                <S.cardFront>
                    {isLoading ? (
                        <S.FakeImage />
                    ) :
                        <S.Image src={pokemon?.sprites?.front_default} alt="Pokemon" />
                    }
                    <S.Flip id='flip' onClick={() => handleFlip(pokemon.id)} ></S.Flip>
                    <S.Text>{pokemon.name}</S.Text>
                    <S.ButtonBox>
                        <S.Button onClick={handleDisabladButtons} >
                            <S.Icon src={trash} alt="Excluir" /> Excluir
                        </S.Button>
                        <S.Line />
                        <S.Button onClick={handleDisabladButtons} >
                            <S.Icon src={edit} alt="Editar" /> Editar
                        </S.Button>
                    </S.ButtonBox>
                </S.cardFront>
                <S.cardBack>
                <S.Flip id='flip' onClick={() => handleFlip('')} ></S.Flip>
                    <S.BackImage src={pokemon?.sprites?.front_shiny} alt="Pokemon" />
                    <S.BackText>{pokemon.name}</S.BackText>
                </S.cardBack>
            </S.InnerCard>
        </S.Container>
    )

}

export default Card;