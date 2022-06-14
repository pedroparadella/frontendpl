import styled from "styled-components";

import BannerSearch from '../../assets/fundo-busca.png';

export const Banner = styled.section`
  width: 100%;
  height: 261px;
  background-image: url(${BannerSearch});
  background-position: right;
  background-size: cover;
  background-repeat: no-repeat;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Form = styled.form`
  width: 1050px;
  height: 75px;
  background-color: #FFF;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: 8px;
  padding: 0 28px;
  border: ${({ isError }) => isError && '2px solid red'};

  img{
    cursor: pointer;
  }

  @media (max-width: 1024px){
    width: 95%;
  }

`;

export const InputSearch = styled.input`
  width: 90%;
  height: 100%;
  border: none;
  background-color: transparent;
  color: #757575;
  font-size:24px;
  
  ::-webkit-input-placeholder{
    color: #757575;
    font-size: 24px;
  }

`;