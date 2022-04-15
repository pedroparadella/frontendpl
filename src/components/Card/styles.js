import styled from 'styled-components';
import repeat from '../../assets/icons/repeat.png'


export const Container = styled.div`
    width: 234px;
    height: 267px;
    margin-bottom: 38px;
    position: relative;
    perspective: 1000px;
    

    :hover #flip {
        display: block;
    }

`;

export const InnerCard = styled.div`
    position: relative;
    width: 100%;
    height: 100%;
    padding: 0;
    background-color: #FFF;
    box-shadow: 0px 3px 6px #E5E5E5;
    border: 1px solid #E4E4E4;
    border-radius: 8px;
    text-align: center;
    transition: transform 0.8s;
    transform-style: preserve-3d;

    ${props => props.flip && `
        transform: rotateY(180deg);
    `};


  /* :hover{
    transform: rotateY(180deg);
  } */
`;

export const cardFront = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    position: absolute;
    padding-top: 28px;
  -webkit-backface-visibility: hidden; /* Safari */
  backface-visibility: hidden;
`;

export const cardBack = styled.div`
   position: absolute;
  width: 100%;
  height: 100%;
  padding-top: 28px;
  -webkit-backface-visibility: hidden; /* Safari */
  backface-visibility: hidden;
  background:transparent linear-gradient(272deg, #AE276F 0%, #5F1478 100%);
  border-radius: 4px;
  color: white;
  transform: rotateY(180deg);

`;



export const FakeImage = styled.div`
     width:64px ;
    height: 64px;
    border-radius: 50%;
    border: 1px solid #E4E4E4;
    background: #F6F4F6 ;
`;

export const Image = styled.img`
    width:64px ;
    height: 64px;
    border-radius: 50%;
    border: 1px solid #E4E4E4;
`;

export const Flip = styled.button`
    width: 30px;
    height: 30px;
    border: none;
    background-color: transparent;
    outline: none;
    display:none ;
    position: absolute ;
    top: 4px;
    right: 4px;
    
    
    :after{
        content: '';
        width: 30px;
        height: 30px;
        background-image: url(${repeat});
        background-repeat: no-repeat;
        background-position: center;
        background-size: contain;
        position: absolute ;
        top: 0;
        left: 0;
        cursor: pointer;

    }

    @media (max-width: 768px) {
        display: block;
    }
`;

export const BackImage = styled.img`
    width: 128px;
    height: 128px;
    border-radius: 4px;
    transform: rotateY(180deg);
`;

export const Text = styled.p`
    font-size: 16px;
    font-weight: 400;
    color: #263238;
    text-transform: capitalize;
`;

export const BackText = styled.p`
    font-size: ${props => props.big ? '24px' : '16px'};
    font-weight: 400;
    color: #fff;
    text-transform: capitalize;
    /* transform: rotateY(180deg); */
`;


export const ButtonBox = styled.div`
    width: 100%;
    height: 43px;
    background: #FFFFFF;
    box-shadow: inset 0px 3px 6px #0000000F;
    border-radius: 0px 0px 8px 8px;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const Button = styled.button`
    width: 100%;
    height: 100%;
    border: none;
    outline: none;
    background: transparent;
    display : flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
`;

export const Icon = styled.img`
    margin-right: 11.75px;
`;

export const Line = styled.div`
    width: 1px;
    height: 70%;
    background-color: #0000000F;
`;