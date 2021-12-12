import React,{useState} from 'react'
import SearchLogo from '../../assets/logos/lupa.svg'
import { 
    SearchBarBackground, 
    SearchBarContainerInput, 
    SearchBarInput, 
    SearchBarLogo 
} from './search-barElements'

import {useDispatch} from 'react-redux';
import {PokeThunk} from '../../Thunks/PokeThunks';

export function Searchbar() {

    const [ValueToSearch,SetValueToSearch] = useState('');

    const dispatch = useDispatch();

    function submit(value:string){
        if(value.length>0){
            dispatch(PokeThunk.GetPokeByName(value.toLowerCase()));
        }
        else
            dispatch(PokeThunk.NewListPoke(1));
    }

    return (
        <SearchBarBackground>
            <SearchBarContainerInput>
                <SearchBarInput placeholder="Digite aqui sua busca..." 
                onChange={(event)=> SetValueToSearch(event.target.value)}
                onKeyUp={(event)=>{
                    if(event.key === 'Enter')
                        submit(ValueToSearch);
                }}/>
                <SearchBarLogo src={SearchLogo} onClick={(event)=> submit(ValueToSearch)}/>
            </SearchBarContainerInput>
        </SearchBarBackground>
    )
}
