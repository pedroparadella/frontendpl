import styled from 'styled-components';


export const Container = styled.div`
    position: fixed;
    top: 50%;
    padding: 7px ;
    
    ${props => props.isOpen && `
       left: 15px;
       background-color: #fff;
       border-radius: 4px;
       box-shadow: 5px 5px 19px 1px rgba(0,0,0,0.89);
    ` };

   
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
`;

export const TimeBox = styled.div`
    width: 350px ;
    padding: 14px;
    position: relative;
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