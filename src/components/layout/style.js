import styled from "styled-components";

export const Container = styled.section`
  max-width: 1050px;
  display: flex;
  flex-direction: column;
  margin: 40px auto;

  @media (max-width: 1024px){
    width: 95%;
  }
`;

export const BoxTitle = styled.div`
 width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;

    h1{
      color: #5F1478;
      font-size: 32px;
      font-weight: normal;
    }
    
    @media (max-width: 500px){
      flex-direction: column;
      align-items: center;
    }
`;

export const Content = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  width: 100%;
  gap: 37px;
  margin-top: 36px;
`;