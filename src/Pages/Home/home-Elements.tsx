import styled from 'styled-components'

export const HomeBackground = styled.section`
    background:#f5f5f5;
    min-height:90vh;
`

export const HomeFunctionsSection = styled.div`
    margin:auto;
    display:flex;
    justify-content:space-between;
    align-items:center;
    width:72vw;
    padding:5vh 0;
    @media only screen and (max-width: 1440px) {
        width:1030px;
    }
    @media only screen and (max-width: 1080px) {
        width:90vw;
    }
    @media only screen and (max-width: 724px) {
        padding:2vh 0;
    }
`

export const HomeFunctionTitle = styled.h3`
    font: var(--unnamed-font-style-normal) normal var(--unnamed-font-weight-normal) var(--unnamed-font-size-32)/var(--unnamed-line-spacing-40) var(--unnamed-font-family-muli);
    letter-spacing: var(--unnamed-character-spacing-0);
    color: var(---cor-primaria);
    text-align: left;
    //font: normal normal normal 32px/40px Muli;
    letter-spacing: 0px;
    color: #5F1478;
    @media only screen and (max-width: 410px) {
        font-size:var(--unnamed-font-size-21);
    }
`

export const HomeFunctionNewCard = styled.button`
    background: var(---cor-destaque) 0% 0% no-repeat padding-box;
    background: #E76316 0% 0% no-repeat padding-box;
    box-shadow: 0px 3px 6px #92207242;
    border-radius: 8px;
    opacity: 1;
    font: var(--unnamed-font-style-normal) normal var(--unnamed-font-weight-bold) var(--unnamed-font-size-18)/23px var(--unnamed-font-family-muli);
    letter-spacing: var(--unnamed-character-spacing-0);
    color: var(--cor-branco);
    border:none;
    padding:1vh 3vw;
    @media only screen and (max-width: 410px) {
        font-size:var(--unnamed-font-size-12);
    }
`

export const HomeCardSection = styled.div`
    display: flex;
    flex-wrap: wrap;
    margin:auto;
    width:75vw;
    @media(max-width:1440px){
        width:1056px;
    }
    @media only screen and (max-width: 1080px) {
        width:100vw;
    }
`

export const HomeCardHolder = styled.div`
    width:20%;
    display:flex;
    justify-content:center;
    margin: 0 0 5vh 0;

    @media only screen and (max-width: 1440px) {
        width:25%;
    }
    @media only screen and (max-width: 1024px) {
        width:33%;
    }

    @media only screen and (max-width: 760px) {
        width:50%;
    }

    @media only screen and (max-width: 490px) {
        width:100%;
    }
    @media only screen and (min-width: 1921px) {
        width:20%;
    }
`

export const HomePaginationContainer = styled.div`
    padding:5vh 0;
    display:flex;
    justify-content:center;
`

export const HomePaginationItem = styled.button`
    color:#5F1478;
    background:transparent;
    border:none;
    font-size:var(--unnamed-font-size-13);
    font-family:var(--unnamed-font-family-muli);
    border-color:#5F1478;
    border-width:1px;
    border-style:solid solid solid solid;
    width:30px;
    height:35px;
    &:not(:last-child){
        margin:0 1vw 0 0;
    }
    &:hover{
        cursor:pointer;
        background:#5F1478;
        color:#fff;
    }
`