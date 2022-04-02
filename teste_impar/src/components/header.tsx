import { StyledHeader } from '../styles/header.style';

import logoImg from "../assets/logo-teste.svg";

export function Header() {

    return (
        <StyledHeader>
            <span><img src={logoImg} alt="Teste Impar" /></span>
        </StyledHeader>
    );
}