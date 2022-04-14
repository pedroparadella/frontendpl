import React, {useState, useEffect} from "react";
import * as S from './styles'
import axios from "axios";

//images
import edit from '../../assets/icons/edit.svg'
import trash from '../../assets/icons/trash.svg'

const Card = ({data, handleDisabladButtons }) => {
    const [pokemon, setPokemon] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true);
        axios.get(data.url)
            .then(res => {
                setPokemon(res.data)
                setIsLoading(false)
                
            })
    }, [data])

    return(
        <S.Container>
           {isLoading ? (
               <S.FakeImage />
           ) :
           <S.Image src={pokemon?.sprites?.front_default} alt="Pokemon"/>
        }
            <S.Text>{pokemon.name}</S.Text>
            <S.ButtonBox>
            <S.Button onClick={handleDisabladButtons} >
                <S.Icon src={trash} alt="Excluir"/> Excluir
            </S.Button>
            <S.Line />
            <S.Button onClick={handleDisabladButtons} >
                <S.Icon src={edit} alt="Editar"/> Editar
            </S.Button>
            </S.ButtonBox>
        </S.Container>
    )

}

export default Card;