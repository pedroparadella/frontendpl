import styled from 'styled-components'

import FullBackGroundImage from '../../assets/Images/fundo-busca.png'
import BackGroundImage from '../../assets/Images/fundo-busca.png'

export const SearchBarBackground = styled.section`
    width:100vw;
    min-height:261px;
    display:flex;
    align-items:center;
    margin:0;
    background: url('${FullBackGroundImage}') no-repeat padding-box;
    background-position:center;
    background-size:cover;
    padding-top:64px;
    @media (max-width:724px){
        background: url('${BackGroundImage}') 80% 100% no-repeat padding-box;
    }
`

export const SearchBarContainerInput = styled.div`
    background: var(---cor-branco) 0% 0% no-repeat padding-box;
    background: #FFFFFF 0% 0% no-repeat padding-box;
    border-radius: 8px;
    width: 60%;
    display:flex;
    margin:20px auto 0 auto;
    &:hover{
        border:1px solid #FFFFFFC2;
    }
    @media only screen and (max-width: 490px) {
        width:80%;
    }
`

export const SearchBarInput = styled.input`
    border-style:none none none none;
    width:90%;
    border-radius: 8px;
    padding: 0 0 0 25px;
    font: var(--unnamed-font-style-normal) normal 300 var(--unnamed-font-size-24)/var(--unnamed-line-spacing-30) var(--unnamed-font-family-muli);
    letter-spacing: var(--unnamed-character-spacing-0);
    text-align: left;
    font: normal normal 300 24px/30px Muli;
    letter-spacing: 0px;
    color: #757575;
    @media only screen and (max-width: 490px) {
        font-size:var(--unnamed-font-size-18);
    }
`

export const SearchBarLogo = styled.img`
    height: 40px;
    padding:0.5vh 0.2vw 0.5vh 0;
    border-radius: 8px;
    opacity: 1;
    margin:auto;
    &:hover{
        cursor:pointer;
    }
`