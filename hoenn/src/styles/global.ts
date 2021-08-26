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

   /* Change the white to any color */
    input:-webkit-autofill,
    input:-webkit-autofill:hover, 
    input:-webkit-autofill:focus, 
    input:-webkit-autofill:active
    {
    -webkit-box-shadow: 0 0 0 30px white inset !important;
    }

    button{
        cursor: pointer;
    }
`;