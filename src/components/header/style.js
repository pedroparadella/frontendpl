import styled from "styled-components";

export const Container = styled.section`
  width: 100%;
  padding: 13px 23px;
  background-image: linear-gradient(to left, #AE276F, #5F1478);
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const WeatherBox = styled.div`
  display: flex;
  align-items: center;

  img{
    width: 50px;
  }

  span{
    margin-left: 15px;
  }

  p{
    color: #fff;
    font-weight: bold;
    font-size: 14px;


    :first-child{
      font-weight: normal;
    }
  }

`;