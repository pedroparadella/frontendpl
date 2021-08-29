import styled from 'styled-components';

export const SearchForm = styled.form`

    width: 100%;
    border-radius: 5px;
    border-style: none;
    height: 50px;
    color:#777777;
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

    svg{
        margin-right: 16px;
        color:#777777;
        cursor: pointer;
    }
`;