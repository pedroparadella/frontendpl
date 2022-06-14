import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  gap: 20px;

  .ball {
    width: 35px;
    height: 35px;
    border-radius: 50%;
    background-image: linear-gradient(to left, #AE276F, #5F1478);
  }

.ball:nth-last-child(1) {
  animation: loaderAnimation 0.8s 0.1s linear infinite;
}
.ball:nth-last-child(2) {
  animation: loaderAnimation 0.8s 0.2s linear infinite;
}
.ball:nth-last-child(3) {
  animation: loaderAnimation 0.8s 0.3s linear infinite;
}

@keyframes loaderAnimation {
  0% {
    transform: translate(0, 0);
  }
  50% {
    transform: translate(0, 35px);
  }
  100% {
    transform: translate(0, 0);
  }
}
`;