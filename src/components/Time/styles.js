import styled from 'styled-components';
import { keyframes } from 'styled-components';


//keyframes
const move = keyframes`
    from {
        left: -100%; ;
    }
    to {
        left: 0;
    }
`;

const close = keyframes`
    from {
        left: 0;
    }
    to {
        left: -100%;
    }
`;






export const Container = styled.div`
    position: fixed;
    top: 50%;
    padding: 7px ;
    z-index:4;
`;

export const CloudButton = styled.button`
     border: none;
    outline: none;
    
    ${props => !props.isOpen && `
        border-radius: 50%;
        background-color: gray;
        cursor: pointer;
        padding: 7px ;
        
        
    ` };

`;

export const Cloud = styled.img`
    width:40px ;
    height: 40px;
    cursor: pointer;

    @media (max-width: 768px) {
        width: 32px;
        height: 32px;
    }
`;

export const TimeBox = styled.div`
    width: 350px ;
    padding: 14px;
    position: relative;
    background-color: #fff;
    border-radius: 4px;
    box-shadow: 5px 5px 19px 1px rgba(0,0,0,0.89);
    animation: ${props => props.isOpen? move: close} .5s ease-in-out;

    @media (max-width: 768px) {
        width: 98%;
    }
`;

export const Country= styled.p`
    font-size: 18px;
    margin-bottom: 10px;
`;

export const Date = styled.p`
    font-weight: 600;
    margin-bottom: 10px;
`;

export const Text = styled.p`
    font-size: 14px;
`;

export const CloseButton = styled.button`
    width: 15px ;
    height: 15px;
    border: none;
    outline: none;
    background-color: transparent;
    cursor: pointer;
    position: absolute ;
    top: 8px;
    right: 8px;
`;

export const Close = styled.img`
       width: 15px ;
    height: 15px;
`;