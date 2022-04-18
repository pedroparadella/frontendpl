import styled from 'styled-components';


export const Container = styled.div`
    width: 100%;
    min-height: calc(100vh - 261px);
    padding: 40px 168px;
    background: #F6F4F6;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;

    @media (max-width: 768px) {
        padding: 40px 65px;
    }
    @media (max-width: 480px) {
        padding: 40px 24px;
    }

`;

export const TopBox = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 36px;

    @media (max-width: 480px) {
        flex-direction: column-reverse;
    }
`;

export const Title = styled.h2`
    font-size: 32px;
    font-weight: 400;
    color: #5F1478;

    @media (max-width: 480px) {
        font-size: 24px;
    }
`;

export const Button = styled.button`
    width: 173px;
    height: 48px;
    border: none;
    outline: none;
    background: #E76316;
    box-shadow: 0px 3px 6px #92207242;
    border-radius: 8px;
    font-size: 18px;
    font-weight: 600;
    color: #FFFFFF;
    cursor: pointer;

    @media (max-width: 480px) {
        margin-bottom: 24px;
    }
`;

export const PaginationBox = styled.div`
    width: 40%;
    margin-bottom: 36px;
    display:flex;
    justify-content: space-between;
    align-items: center;

    @media (max-width: 768px) {
        width: 100% ;
    }
    @media (max-width: 480px) {
        width: 100% ;
        flex-direction: column;
    }

`;

export const Total = styled.p``;

export const Pagination = styled.div`
    width: 50% ;
    display: flex;
    justify-content: space-between;
    align-items: center;

    @media (max-width: 768px) {
        width: 35%;
    }
    @media (max-width: 480px) {
        width: 65%;
        margin-top: 24px;
    }

`;

export const PaginationButton = styled.button`
    background: transparent ;
    border: none;
    outline: none;
    cursor: pointer;
    
`;

export const PaginationIcon = styled.img`
    width: 24px;
    height: 24px;
`

export const CardsContainer = styled.div`
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;

    @media (max-width: 768px) {
        flex-direction: column;
    }
`;