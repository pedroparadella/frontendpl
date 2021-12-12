import styled from 'styled-components';

export const CardContainer = styled.div`
    background: var(---cor-branco) 0% 0% no-repeat padding-box;
    background: #FFFFFF 0% 0% no-repeat padding-box;
    box-shadow: 0px 3px 6px #E5E5E5;
    border: 1px solid #E4E4E4;
    border-radius: 8px;
    width: 234px;
    height: 267px;
`

export const CardImageHolder = styled.div`
    width:70%;
    height:50%;
    display:flex;
    align-item:center;
    border-style: none none solid none;
    border-width: 1px;
    border-color: #E4E4E4;
    margin:auto;
`

export const CardImageContainer = styled.div`
    background: #F6F4F6 0% 0% no-repeat padding-box;
    border: 1px solid #E4E4E4;
    width:50%;
    margin:auto;
    display:flex;
    justify-content:space-around;
    border-radius:60%;
    height:65%;

`

export const CardImage = styled.img`
    margin:auto;
`

export const CardTitleContainer = styled.div`
    padding:1vh 0 0 0;
    height:30%;
`

export const CardTitle = styled.h5`
    font: var(--unnamed-font-style-normal) normal var(--unnamed-font-weight-normal) 16px/var(--unnamed-line-spacing-20) var(--unnamed-font-family-muli);
    letter-spacing: var(--unnamed-character-spacing-0);
    color: var(--unnamed-color-263238);
    text-align: center;
    font: normal normal normal 16px/20px Muli;
    letter-spacing: 0px;
    color: #263238;
    text-transform: capitalize;
`

export const CardButtonsContainer = styled.div`
    background: var(---cor-branco) 0% 0% no-repeat padding-box;
    background: #FFFFFF 0% 0% no-repeat padding-box;
    box-shadow: inset 0px 3px 6px #0000000F;
    border-radius: 0px 0px 8px 8px;
    opacity: 1;
    width:100%;
    height:20%;
    display:flex;
`
export const CardButton = styled.div`
    display:flex;
    width:50%;
    height:50%;
    margin:auto 0 auto 0;
    &:first-child{
        border-style:none solid none none;
        border-color:#F6F4F6;
        border-width:1px;
    }
`

export const ButtonFunction = styled.button`
    border:none;
    background:transparent;
    margin:auto auto auto 0;
    &:hover{
        cursor:pointer;
    }
`

export const ButtonImg = styled.img`
    width: 13px;
    height: 13px;
    margin:auto 0.5vw auto auto;
`