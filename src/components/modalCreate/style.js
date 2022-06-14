import styled from "styled-components";

export const Overlay = styled.div`
  width: 100%;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  background: #00000050;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Modal = styled.section`
  width: ${({ success }) => success ? '450px' : '600px'};
  height: ${({ success }) => success ? '250px' : '550px'};
  background: #FFF;
  border-radius: 8px;
  padding: 41px 32px;

  @media (max-width: 500px){
    width: 100%;
    padding: 35px 20px;
  }

  .modal-success{
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }

  
  span{
    display: flex;
    align-items: center;
    padding-bottom: 30px;
    border-bottom: 1px solid #D4D4D4;
  }
`;

export const BoxTitle = styled.div`
  width: 100%;
  border-bottom: 1px solid #d4d4d4;
  display: flex;
  align-items: center;
  padding-bottom: 32px;
`;

export const Title = styled.h2`
  font-size: 32px;
  color: #5F1478;
  margin-right: 20px;
  margin-left: 18px;
`;

export const InputBox = styled.div`
  margin-top: 45px;

  input[type="file"] {
    display: none;
  }

  .file{
    padding: 0 0 0 25px;
    width: 95%;
    height: 55px;
    border-radius: 8px;
    border: ${({ image, isError }) => image ? '1px solid #30d929' : isError ? '2px solid red' : '1px solid #B9B9B9'};
    font-size: 18px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 10px;
    cursor: pointer;

    p{
      color: ${({ image, isError }) => image ? '#30D929' : isError ? 'red' : '#757575'};
      font-weight: ${({ image }) => image && '600'};
      font-size: 16px;
    }

    .button{
      width: 173px;
      height: 48px;
      background-color: #FFF;
      box-shadow: 0 3px 6px #92207242;
      border-radius: 8px;
      font-size: 16px;
      cursor: pointer;
      transition: 0.5s all;
      display: flex;
      align-items: center;
      justify-content: center;
      font-weight: bold;
      color: #E76316;
      border: 1px solid #E76316;

     :hover{
        filter: brightness(90%);
      }
    }
  } 
`;

export const Label = styled.label`
    text-transform: uppercase;
  font-weight: 600;
  font-size: 14px;
`;

export const Input = styled.input`
  width: 95%;
  height: 55px;
  border-radius: 8px;
  border: ${({ isError }) => isError ? '2px solid red' : '1px solid #B9B9B9'};
  font-size: 18px;
  color: #757575;
  padding: 18px 25px;
  margin-top: 12px;

  ::-webkit-input-placeholder{
    color: ${({ isError }) => isError ? 'red' : '#757575'};
    font-size: 16px;
  }
`;

export const BoxButton = styled.div`
  border-top: 1px solid #b9b9b9;
  margin-top: 40px;
  display: flex;
  justify-content: flex-end;

  @media (max-width: 375px){
    padding-top: 20px;
  }
`;

export const TextError = styled.p`
  font-size: 14px;
  color: red;
  text-align: right;
  margin-top: 15px;
  font-weight: bold;
`;