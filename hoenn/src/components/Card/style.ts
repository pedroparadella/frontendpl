import styled from 'styled-components';

interface ButtonProps {
    hoverColor: string;
}

export const Card = styled.div`

    display: flex;
    flex-direction: column;
    background: #fff;
    
    width: 250px;
    
    margin-top: 25px;
    border-radius: 10px;
    border: 1px #e7e6e7 solid;

    align-items: center;

    box-shadow: 0 0 1em #e7e6e7;
    
    img{
        margin-top: 25px;
        height: 150px;
        width: 150px;
        border-radius: 50%;
        border: 1px #e7e6e7 solid;
        background: #f6f4f6;

    }

    hr {
        margin: 15px 0 15px 0;
        border: 0; height: 1px; 
        background: #e7e6e7;
        width: 80%;
    }

`;

export const Info = styled.div`

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    p{
        margin-top: 10px;
        border: 1px solid #e7e6e7;
        border-radius: 10px;
        color:  #8e9497;
        padding: 5px;
    }

`;

export const Footer = styled.div`
    
    
    margin-top: 15px;
    display: flex;
    flex-direction: row;
    height: 50px;
    width: 100%;
    box-shadow: inset 0 7px 9px -7px rgba(0,0,0,0.1);
    align-items: center;


    


`;

export const Button = styled.div<ButtonProps>`

    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    height: 100%;

    &:hover{
        a{
            color: ${(props) => props.hoverColor};
        }
    }
    
    
    a{
        text-decoration: none;
        color: #8e9497;

    }
    svg{
        margin-right: 5px;
    }
`;

export const Divider = styled.div`

  display: inline-block;
  width: 2px !important;
  background-color: #e7e6e7;
  margin: 0 10px;
  height: 20px !important;


`;

