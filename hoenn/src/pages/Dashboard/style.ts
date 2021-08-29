import styled from 'styled-components';

import Mudkip from "../../assets/bg-mudkip.jpg";

export const Header = styled.div`

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
            max-width: 70vw;
            
        }
    }

`;

export const Body = styled.div`

    display: flex;
    flex-direction: column;
    align-items: center;
    

`;

export const BodyHeader = styled.div`

    margin-top: 30px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    max-width: 70vw;
    width: 100%;

    h1{
        font-size: 32px;
        font-weight: 180;
        color: #003a70;

    }
`;

export const CardList = styled.div`

    display: flex;
    flex-direction: row;
    justify-content: space-between;
    flex-wrap: wrap;
    margin-top: 30px;
    max-width: 70vw;
    width: 100%;


    /* margin-top: 80px;
    max-width: 700px;
    display: flex;
    flex-direction: row;
    justify-content: space-between; */

    
`;