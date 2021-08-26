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
