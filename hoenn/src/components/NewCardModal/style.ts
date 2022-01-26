import styled from 'styled-components';

export const NewCardForm = styled.form`

    display: flex;
    flex-direction: column;

    hr{
        margin: 20px 0;
        border: 0; height: 1px; 
        background: #e7e6e7;
        
    }

    section{
        display: flex;
        flex-direction: column;

        label{
            font-weight: bold;
            margin: 20px 0;
        }

    }

    > button{
        align-self: flex-end;
    }

`;

export const Header = styled.div`

    display: flex;
    
    margin-top: 30px;

    
    h2{
        font-size: 32px;
        margin-left: 15px;

    }

`;

export const Anexo = styled.div`

    width: 100%;
    border-radius: 5px;
    border: 1px #8e9497 solid;
    height: 60px;
    background: #fff;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 16px;

    label{
        
        font-weight: normal !important;
        color: #8e9497;

    }


`;