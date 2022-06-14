import styled from "styled-components";

export const CardBox = styled.div`
  width: 234px;
  height: 267px;
  border-radius: 8px;
  border: 1px solid #E4E4E4;
  box-shadow: 0 3px 6px #E5E5E5;
  background: #FFF;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  animation: 0.5s fade ease-in;


  @keyframes fade{
    0% {
      opacity: 0;
    } 100% {
      opacity: 9;
    }
  }

`;

export const BoxImage = styled.figure`
  width: 95px;
  height: 95px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #F6F4F6;
  border: 1px solid #E4E4E4;
  margin-top: 28px;

  img{
    width: 90px;
    height: 90px;
    object-fit: cover;
    border-radius: 50%;
  }
`;

export const CardTitle = styled.h2`
  font-size: 16px;
  color: #263238;
  padding-top: 10px;
  border-top: 1px solid #F0EFF0;
  width: 75%;
  text-align: center;
`;

export const BoxOptions = styled.div`
  width: 100%;
  height: 40px;
  display: flex;
  align-items: center;
  border-radius: 0 0 8px 8px;
  box-shadow: 0 3px 6px #0000000F;
  border-top: 1px solid #f0eff0;

  button{
    width: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    background: transparent;
    border: none;
    cursor: pointer;

    :first-child{
      border-right: 1px solid #f0eff0;
    }

    :hover{
      p{
        opacity: .9;
      }
    }

    p{
      margin-left: 11px;
      font-size: 15px;
      color: #263238;
      opacity: .5;
      transition: 0.5s all;
      text-align: center;
    }
  }
`;

export const TextError = styled.h1`
  color: #c8c8c8;
  text-align: center;
  font-size: 32px;
  width: 70%;

  strong{
    color: #222;
  }
`; 