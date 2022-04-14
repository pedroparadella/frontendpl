import styled from 'styled-components';
import fundoBusca from '../../assets/images/fundo-busca.png';

export const Container = styled.div`
    width: 100%;
    height: 261px;
    background-image: url(${fundoBusca});
    position: relative;
    display: flex;
    justify-content: center;
    align-items: flex-end;
    padding-bottom: 39px;
`;

export const TopBox = styled.div`
    width: 100%;
    height: 64px;
    background: transparent linear-gradient(272deg, #AE276F 0%, #5F1478 100%) 0% 0% no-repeat padding-box;
    box-shadow: 0px 3px 6px #00000029;
    position: fixed;
    top: 0;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    padding: 13px 24px;
`;

export const Logo = styled.img`

`;

export const SearchBox = styled.form`
    width: 80%;
    height: 75px;
    background-color: #FFFFFF;
    border-radius: 8px;
    padding: 13px 28px;
    padding-right: 25px;
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

export const Input = styled.input`
    width: calc(100% - 50px);
    height: 100%;
    border: none;
    background-color: transparent;
    outline: none;
    font-size: 24px;
    font-weight: 300;
    color: #757575;
`;

export const Button = styled.button`
    width: 49px;
    height: 49px;
    background-color: transparent;
    border: none;
    outline: none;
    display:flex ;
    justify-content: center;
    align-items: center;
    cursor: pointer;
`;

export const Lupa = styled.img``;