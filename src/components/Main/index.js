import React, {useEffect} from "react";
import Card from "../Card";
import * as S from './styles'

//images 
import next from '../../assets/icons/next.png'
import back from '../../assets/icons/back.png'

const Main = ({data, count, page, setPage, isSearching, handleDisabladButtons}) => {

    const totalPAge = Math.floor(count / 12) + 1;

    const handleClickNext = () => {
        if((page/12) + 1 < totalPAge){
            setPage(page + 12)
        }
    }

    const handleClickBack = () => {
        if((page/12) > 0){
            setPage(page - 12)
        }
    }

    useEffect(() => {
       
    }, [page])

    const totalResults = isSearching ? data.length : count;

    return(
        <S.Container>
            <S.TopBox>
                <S.Title>Resultado da busca</S.Title>
                <S.Button onClick={handleDisabladButtons} >Novo Card</S.Button>
            </S.TopBox>
            <S.PaginationBox>
                <S.Total>Total de Pokemóns: {totalResults}</S.Total>
                {!isSearching && (
                    <S.Pagination>
                    <S.PaginationButton onClick={handleClickBack} >
                        <S.PaginationIcon src={back} alt="Next"/>
                    </S.PaginationButton>
                    <S.Total>Página {(page/12) + 1} de  {totalPAge}</S.Total>
                    <S.PaginationButton onClick={handleClickNext}  >
                        <S.PaginationIcon src={next} alt="Next"/>
                    </S.PaginationButton>
                </S.Pagination>
                )}
            </S.PaginationBox>
            <S.CardsContainer>
                {data?.map(item => (
                    <Card handleDisabladButtons={handleDisabladButtons} key={item.name} data={item} />
                ))}
            </S.CardsContainer>
        </S.Container>
    )
}

export default Main;