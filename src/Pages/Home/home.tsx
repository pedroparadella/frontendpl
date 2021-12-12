import React,{useEffect,useState,useLayoutEffect} from 'react'
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

import { ShowToast } from '../../Services/ToastService';

import {useDispatch,useSelector} from 'react-redux';
import {PokeThunk} from '../../Thunks/PokeThunks';

export function Home() {

    const [PaginationInteractor,SetPaginationInteractor] = useState({actual:0,more_options:new Array<number>()})

    const PokeEntity:any = useSelector((state:any) => state.pokemon);
    
    const dispatch = useDispatch();

    useLayoutEffect(()=>{
        ChangePage(PaginationInteractor.actual);
    },[])

    useEffect(()=>{
        if(PokeEntity.pokemon_last_page==-1)
            SetPaginationInteractor({...PaginationInteractor,more_options:BuildPageOptions(-1)})
        else if(PaginationInteractor.more_options.length==0)
        SetPaginationInteractor({...PaginationInteractor,more_options:BuildPageOptions(1)})
    },[PokeEntity])


    function ChangeListPokemon(pageNumber:number):void{
        let initialValue = pageNumber === 0? 1:(30*pageNumber);

        dispatch(PokeThunk.NewListPoke(initialValue));

        return;
    }

    function ChangePage(page_tmp:number){
        let paginationOptions_temp = BuildPageOptions(page_tmp);
        SetPaginationInteractor({...PaginationInteractor,actual:page_tmp,more_options:paginationOptions_temp});
        ChangeListPokemon(page_tmp);
    }

    function BuildPageOptions(page_tmp:number):Array<number>{
        
        if(page_tmp==-1){
            return new Array<number>();
        }
            
            
        
        if(page_tmp-1<=0)
            return new Array<number>(2,3,4);
        else if(page_tmp+1>PokeEntity.pokemon_last_page){
            let array_tmp = new Array<number>();
            for(let i=PokeEntity.pokemon_last_page-3;i<PokeEntity.pokemon_last_page;i++)
                array_tmp.push(i)
            return array_tmp;
        }
        else{
            let array_tmp = new Array<number>();
            for(let i=page_tmp-1;i<=page_tmp+1;i++)
                array_tmp.push(i)
            return array_tmp;
        }
    }

    return (
        <>
            <Header/>
            <HomeBackground>
                <Searchbar/>
                <HomeFunctionsSection>
                    <HomeFunctionTitle>Resultado de busca</HomeFunctionTitle>
                    <HomeFunctionNewCard onClick={(event)=> ShowToast('Função não implementada.')}>Novo Card</HomeFunctionNewCard>
                </HomeFunctionsSection>
                <HomeCardSection>
                    {PokeEntity.pokemon_list.map((object:any,index:number)=>{
                        return(
                            <HomeCardHolder key={index}>
                                <Card title={object?.name} secondaryJson={object?.url}/>
                            </HomeCardHolder>
                        )
                    })}
                </HomeCardSection>
                <HomePaginationContainer>
                {PaginationInteractor.actual<= 2 ? <HomePaginationItem disabled style={{width:'60px'}} onClick={((event)=> ChangePage(0))}>Primeira</HomePaginationItem>:<HomePaginationItem style={{width:'60px'}} onClick={((event)=> ChangePage(0))}>Primeira</HomePaginationItem>}
                {
                    PaginationInteractor.more_options.map((number,index)=>{
                        return(
                            <HomePaginationItem onClick={((event)=> ChangePage(number))} key={index}>{number}</HomePaginationItem>
                        )
                    })
                }
                {PokeEntity.pokemon_last_page<= 0 ? <HomePaginationItem disabled style={{width:'60px'}} onClick={((event)=> ChangePage(PokeEntity.pokemon_last_page))}>última</HomePaginationItem>:<HomePaginationItem style={{width:'60px'}} onClick={((event)=> ChangePage(PokeEntity.pokemon_last_page))}>Ultima</HomePaginationItem>}
                </HomePaginationContainer>
            </HomeBackground>
        </>
    )
}