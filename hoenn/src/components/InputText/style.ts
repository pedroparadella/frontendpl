import styled from 'styled-components';

export const Container = styled.div`

    width: 100%;
    border-radius: 5px;
    border: 1px #8e9497 solid;
    height: 60px;
    background: #fff;
    display: flex;
    align-items: center;
    padding: 16px;
    
    input{
        flex: 1;
        background: transparent;
        border: none;
        font-size: 22px;
        color: #777777;
        
        &::placeholder{
            color:#777777;
        }
    }

`;