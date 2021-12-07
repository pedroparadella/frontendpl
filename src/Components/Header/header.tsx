import React from 'react'

import LogoHeaderSVG from "../../assets/logos/logo-teste.svg"

import { 
    NavContainer, 
    NavLogo 
} from './headerElements'

export function Header() {
    return (
        <NavContainer>
            <NavLogo src={LogoHeaderSVG}/>
        </NavContainer>
    )
}

