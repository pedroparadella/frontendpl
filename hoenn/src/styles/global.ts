import React from 'react';
import { createGlobalStyle} from 'styled-components';

export default createGlobalStyle`
    *{
        margin:0;
        padding: 0;
        box-sizing: border-box;
        outline: 0;
    }

    body{
        background: #f6f4f6;
        
    }

    body, input, button{
        font-family: Arial, Helvetica, sans-serif;
    }

    button{
        cursor: pointer;
    }
`;