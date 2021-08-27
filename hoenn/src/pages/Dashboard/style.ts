import styled from 'styled-components';

import Mudkip from "../../assets/bg-mudkip.jpg";

export const Container = styled.div`

    height: 30vh;
    display: flex;
    align-items: center;
    

    background: url(${Mudkip}) no-repeat center;
    background-size: cover;

    form{
        display: flex;
        justify-content: center;    
        width: 100%;
        

        div{
            width: 70%;
            
        }
    }

`;

export const Body = styled.div`

    display: flex;
    justify-content: center;

    div{
        width: 70%;
        margin-top: 30px;
        display: flex;
        align-items: center;
        justify-content: space-between;

        h1{
            font-size: 32px;
            font-weight: 180;
            color: #003a70;

        }
        
    }

`;
