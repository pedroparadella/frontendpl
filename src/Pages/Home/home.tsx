import React,{useEffect,useState} from 'react'
import Card from '../../Components/Card'
import Header from '../../Components/Header'
import Searchbar from '../../Components/SearchBar'
import { 
    HomeBackground, 
    HomeCardHolder, 
    HomeCardSection, 
    HomeFunctionNewCard, 
    HomeFunctionsSection, 
    HomeFunctionTitle, 
    HomePaginationContainer,
    HomePaginationItem
} from './home-Elements'

import {EntityPokemon, GetListPokemon} from '../../Services/PokemonService'

export function Home() {

    const [PokemonList,SetPokemonList] = useState(new Array<EntityPokemon>());
    const [PaginationInteractor,SetPaginationInteractor] = useState(new Array<number>())
    const [ActualPage,SetActualPage] = useState(0);
    const [PaginationLimit,SetPaginationLimit] = useState(0);

    useEffect(()=>{
       SetActualPage(0);
       SetPaginationInteractor(PaginatioArrayContent(0))
    },[])

    useEffect(()=>{
    },[PokemonList])

    useEffect(()=>{

        SetPaginationInteractor(PaginatioArrayContent(ActualPage));

        let initialValue = ActualPage === 0? 1:(30*ActualPage);

        GetListPokemon(initialValue,30)
        .then((res)=>{

            if(PaginationLimit!==Math.floor(res.count/30))
                SetPaginationLimit(Math.floor(res.count/30));

            let array = new Array<EntityPokemon>();

            for(let i=0;i<res.results.length;i++){
                let objetTMP = new EntityPokemon();
                objetTMP.SetName(res.results[i].name);
                objetTMP.SetUrl(res.results[i].url);
                array.push(objetTMP)
            }

            SetPokemonList(array);
        });
    },[ActualPage])

    function PaginatioArrayContent(pageNumber:number):Array<number>{
        
        let array:Array<number> = new Array<number>();

        if(pageNumber<=0 && (pageNumber !== PaginationLimit || pageNumber===0))
            array = BuildArrayPagination(2);
        else if(pageNumber === PaginationLimit){
            array = BuildArrayPagination(pageNumber-5);
        }
        else if(pageNumber + 5 > PaginationLimit)
            array = BuildArrayPagination(pageNumber+(PaginationLimit-(pageNumber+5)));
        else if(pageNumber-2>3)
            array = BuildArrayPagination(pageNumber-2);
        else{
            array = BuildArrayPagination(pageNumber+2 - pageNumber);
        }
        return array;
    }

    function BuildArrayPagination(indexInitial:number):Array<number>{
        let Pagination = new Array<number>();
        for(let i=indexInitial;i!==indexInitial+5;i++){
            Pagination.push(i);
        }
        return Pagination
    }

    return (
        <>
            <Header/>
            <HomeBackground>
                <Searchbar/>
                <HomeFunctionsSection>
                    <HomeFunctionTitle>Resultado de busca</HomeFunctionTitle>
                    <HomeFunctionNewCard>Novo Card</HomeFunctionNewCard>
                </HomeFunctionsSection>
                <HomeCardSection>
                    {PokemonList.map((object,index)=>{
                        return(
                            <HomeCardHolder key={index}>
                                <Card title={object?.name} secondaryJson={object?.url}/>
                            </HomeCardHolder>
                        )
                    })}
                </HomeCardSection>
                <HomePaginationContainer>
                    {ActualPage<= 2 ? <HomePaginationItem disabled style={{width:'60px'}} onClick={((event)=> SetActualPage(0))}>Primeira</HomePaginationItem>:<HomePaginationItem style={{width:'60px'}} onClick={((event)=> SetActualPage(0))}>Primeira</HomePaginationItem>}
                    {PaginationInteractor.map((item,index)=>{
                        return(
                            <HomePaginationItem key={index} onClick={((event)=> SetActualPage(item))}>{item}</HomePaginationItem>
                        )
                    })}
                    {PaginationLimit<= 0 ? <HomePaginationItem disabled style={{width:'60px'}} onClick={((event)=> SetActualPage(PaginationLimit))}>última</HomePaginationItem>:<HomePaginationItem style={{width:'60px'}} onClick={((event)=> SetActualPage(PaginationLimit))}>Ultima</HomePaginationItem>}
                </HomePaginationContainer>
            </HomeBackground>
        </>
    )
}