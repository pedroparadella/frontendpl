import React from 'react'
import SearchLogo from '../../assets/logos/lupa.svg'
import { 
    SearchBarBackground, 
    SearchBarContainerInput, 
    SearchBarInput, 
    SearchBarLogo 
} from './search-barElements'

export function Searchbar() {
    return (
        <SearchBarBackground>
            <SearchBarContainerInput>
                <SearchBarInput placeholder="Digite aqui sua busca..."/>
                <SearchBarLogo src={SearchLogo}/>
            </SearchBarContainerInput>
        </SearchBarBackground>
    )
}
