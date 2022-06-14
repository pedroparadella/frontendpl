import styled from "styled-components";

export const Button = styled.button`
  width: 173px;
  height: 48px;
  font-size: 16px;
  font-weight: bold;
  background-color: ${({ buttonBackground }) => buttonBackground};
  color: ${({ buttonColor }) => buttonColor};
  border: ${({ buttonBorder }) => buttonBorder};
  margin: ${({ buttonMarginDesk }) => buttonMarginDesk};
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: 0.5s all;

  @media (max-width: 375px){
    width: 140px;
  }


  :hover{
    filter: brightness(85%);
  }
`;