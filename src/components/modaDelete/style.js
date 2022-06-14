import styled from "styled-components";

export const Modal = styled.div`
  width: 438px;
  height: 434px;
  background-color: #FFF;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;

  @media (max-width: 500px){
    width: 95%;
    padding: 0 20px;
  }


  span{
    width: 159px;
    height: 159px;
    background-color: #DB25250F;
    border: 6px solid #E4E4E4;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 50px 0 25px 0;

    img{
      width: 68px;
      height: 68px;
    }
  }

  p{
    color: #454545;
    text-align: center;
    text-transform: uppercase;
    font-size: 12px;
    font-weight: 600;
  }
`;

export const CloseButton = styled.button`
  position: absolute;
  top: -.8rem;
  right: -.8rem;
  width: 34px;
  height: 34px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  box-shadow: 0 3px 6px #E7631636;
  background-color: #E76316;
  font-size: 18px;
  color: #FFFF;
  border: none;
  cursor: pointer;
`;

export const Title = styled.h2`
  font-size: 32px;
  text-align: center;
  color: #DB2525;
  margin-bottom: 13px;
`;

export const BoxButtons = styled.div`
  display: flex;
  align-items: center;
  padding-top: 22px;
  border-top: 1px solid #E4E4E4;
  justify-content: center;
  margin-top: 28px;

`;