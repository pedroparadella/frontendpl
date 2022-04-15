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
    z-index: 3;
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
    z-index: 4;
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
    position: relative;
`;

export const SugestionList = styled.ul`
    width: 80%;
    max-height: 200px;
    padding: 13px 28px;
    padding-right: 25px;
    /* border-top: black solid 1px; */
    box-shadow: 0px 3px 6px #E5E5E5;
    list-style: none;
    background: #fff;
    position: absolute;
    bottom: 38px;
    border-radius: 0 0 8px 8px;
    transform: translateY(100%);
    z-index: 3;
    overflow: auto;

::-webkit-scrollbar {
  width: 7px;
}

::-webkit-scrollbar-track {
  background: #f1f1f1;
}

::-webkit-scrollbar-thumb {
  background: #888;
}

::-webkit-scrollbar-thumb:hover {
  background: #555;
}
`;

export const Sugestion = styled.li`
    font-size: 18px;
    text-transform: capitalize;
    border-bottom: solid 1px #bfb8b8;
    margin-bottom: 8px;
    padding: 4px;
    cursor: pointer;
    
    &:hover {
        font-weight: bold;
    }
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

    @media (max-width: 768px) {
        font-size: 18px;
    }
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