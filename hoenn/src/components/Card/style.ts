import styled from 'styled-components';

export const Card = styled.div`

    display: flex;
    flex-direction: column;
    background: #fff;
    
    width: 200px;
    margin-top: 25px;
    border-radius: 10px;
    border: 1px #e7e6e7 solid;

    align-items: center;
    
    img{
        margin-top: 25px;
        height: 100px;
        width: 100px;
        border-radius: 50px;
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
    
    border-top: 1px black solid;
    margin-top: 15px;
    display: flex;
    flex-direction: row;
    height: 30px;
    
    width: 100%;


    a{
        
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        text-decoration: none;
    }

`;