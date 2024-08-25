import React, { useContext } from "react";
import carbg from "./assets/carbg.jpg";
import styled, { keyframes } from "styled-components";
import { Section2 } from "./Section2";
import { LanguageContext } from "./LanguageContext";
import Footer from "./Footer";

export const Home = () => {
  const { homePageObject } = useContext(LanguageContext);
  return (
    <>
      <SectionWrapper1>
        <IntroText>
          <H1>514-273-8999</H1>
          <H1>{homePageObject.h1}</H1>
          <H3>{homePageObject.h2}</H3>
          <H3>{homePageObject.h3} {homePageObject.h4}</H3>
        </IntroText>
        <CarImgWrapper>
          <CarImg src={carbg} alt="" />
        </CarImgWrapper>
      </SectionWrapper1>

      <Section2 />
      <Footer />
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
  padding: 0 20px;
  box-sizing: border-box;

  @media (max-width: 1024px) {
    flex-direction: column;
    align-items: center;
    margin-top: 30px;
  }
`;

const IntroText = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  opacity: 0;
  animation: slideIn 1s forwards, fadeIn 1s forwards;
  max-width: 50%;
  z-index: 2;
  background-color: rgba(0, 0, 0, 0.5); // Add a semi-transparent background
  padding: 20px; // Add some padding
  border-radius: 10px;
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

  @media (max-width: 1024px) {
    max-width: 100%;
    align-items: center;
    text-align: center;
    margin-bottom: 30px;
  }
`;

const H1 = styled.h1`
  font-weight: bolder;
  font-size: 50px;
  color: white;
  white-space: nowrap;
  margin-bottom: 10px;
  z-index: 99;

  @media (max-width: 768px) {
    font-size: 30px;
  }

  @media (max-width: 480px) {
    font-size: 24px;
    white-space: normal;
  }
`;

const H3 = styled.h3`
  font-size: 18px;
  color: white;
  margin-bottom: 5px;

  @media (max-width: 768px) {
    font-size: 15px;
  }

  @media (max-width: 480px) {
    font-size: 14px;
  }
`;

const CarImgWrapper = styled.div`
  position: relative;
  overflow: hidden;
  max-width: 50%;
  z-index: 1;

  @media (max-width: 1024px) {
    max-width: 100%;
    display: flex;
    justify-content: center;
  }
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

  @media (max-width: 1024px) {
    max-height: 60vh;
    width: 100%;
    object-fit: contain;
  }

  @media (max-width: 768px) {
    max-height: 50vh;
  }
`;

export default Home;