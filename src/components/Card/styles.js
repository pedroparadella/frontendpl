import styled from 'styled-components';


export const Container = styled.div`
    width: 234px;
    height: 267px;
    background-color: #FFF;
    box-shadow: 0px 3px 6px #E5E5E5;
    border: 1px solid #E4E4E4;
    border-radius: 8px;
    padding: 0;
    padding-top: 28px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 38px;

`;

export const FakeImage = styled.div`
     width:64px ;
    height: 64px;
    border-radius: 50%;
    border: 1px solid #E4E4E4;
    background: #F6F4F6 ;
`;

export const Image = styled.img`
    width:64px ;
    height: 64px;
    border-radius: 50%;
    border: 1px solid #E4E4E4;
`;

export const Text = styled.p`
    font-size: 16px;
    font-weight: 400;
    color: #263238;
    text-transform: capitalize;
`;

export const ButtonBox = styled.div`
    width: 100%;
    height: 43px;
    background: #FFFFFF;
    box-shadow: inset 0px 3px 6px #0000000F;
    border-radius: 0px 0px 8px 8px;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const Button = styled.button`
    width: 100%;
    height: 100%;
    border: none;
    outline: none;
    background: transparent;
    display : flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
`;

export const Icon = styled.img`
    margin-right: 11.75px;
`;

export const Line = styled.div`
    width: 1px;
    height: 70%;
    background-color: #0000000F;
`;