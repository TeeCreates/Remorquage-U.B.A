import carbg from "./assets/carbg.jpg";
import styled, { keyframes } from "styled-components";
import { Section2 } from "./Section2";


export const Home = () => {
  return (
    <>
      <SectionWrapper1>
        <IntroText>
          <H1>Providng 24/7 towing</H1>
          <H1>service with prompt </H1>
          <H1>response</H1>
          <H3>We are available around the clock to assist you with our </H3>
          <H3>fast and reliable towing service.</H3>
        </IntroText>
        <CarImgWrapper>
          <CarImg src={carbg} alt="" />
        </CarImgWrapper>
      </SectionWrapper1>

      <Section2 />
    </>
  );
};

const SectionWrapper1 = styled.div`
  margin-top: 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  overflow: hidden;
width: 100%;
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    text-align: center;
  }
`;

const IntroText = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  opacity: 0;
  animation: slideIn 1s forwards, fadeIn 1s forwards;
  margin-left: 100px;

  @keyframes slideIn {
    from {
      transform: translateX(-100%);
    }
    to {
      transform: translateX(0);
    }
  }

  @keyframes fadeIn {
    to {
      opacity: 1;
    }
  }
`;

const H1 = styled.h1`
  font-weight: bolder;
  font-size: 50px;
  color: white;
  white-space: nowrap;
`;

const H3 = styled.h3`
  font-size: 18px;
  color: white;
`;

const CarImgWrapper = styled.div`
  position: relative;
  overflow: hidden;
`;

const slideFromRight = keyframes`
  from {
    transform: translateX(100%);
  }
  to {
    transform: translateX(0);
  }
`;

const CarImg = styled.img`
  max-height: 90vh;
  width: auto;
  animation: ${slideFromRight} 1s forwards;
`;

export default Home;
