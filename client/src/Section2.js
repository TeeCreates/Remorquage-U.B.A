import React, { useRef, useEffect, useState } from "react";
import boxIcon from "./assets/boxIcon.jpg";
import styled from "styled-components";
import { LanguageContext } from "./LanguageContext";
import { useContext } from "react";


export const Section2 = () => {
  const wrapperRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const {homePageObject} = useContext(LanguageContext)


  console.log(homePageObject.box1, "home")
  useEffect(() => {
    const handleScroll = () => {
      if (wrapperRef.current) {
        const top = wrapperRef.current.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        if (top < windowHeight) {
          setIsVisible(true);
        } else {
          setIsVisible(false);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    // Cleanup function to remove event listener
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div>
    <Wrapper ref={wrapperRef} className={isVisible ? "visible" : ""}>
      <div>
        <h3>{homePageObject.reliable}</h3>
        <H1>{homePageObject.requestTitle} </H1>
        <H1>{homePageObject.requestTitle1}</H1>
      </div>
      <div>
        <div>
          <BoxDiv>
            <BoxIconImg src={boxIcon} alt="" />
            <H2>{homePageObject.box1}</H2>
          </BoxDiv>
          <Line></Line>
        </div>
        <div>
          <BoxDiv>
            <BoxIconImg src={boxIcon} alt="" />
            <H2>{homePageObject.box2}</H2>
          </BoxDiv>
          <Line></Line>
        </div>
        <div>
          <BoxDiv>
            <BoxIconImg src={boxIcon} alt="" />
            <H2>{homePageObject.box3}</H2>
          </BoxDiv>
          <Line></Line>
        </div>
        <div>
          <BoxDiv>
            <BoxIconImg src={boxIcon} alt="" />
            <H2>{homePageObject.box4}</H2>
          </BoxDiv>
        </div>
      </div>
    </Wrapper>

    </div>
  );
};

const H2 = styled.h2`
  color: white;
  font-size: 20px;
`;

const H1 = styled.h2`
  font-weight: bold;
  font-size: 50px;
`;

const BoxIconImg = styled.img`
  height: 80px;
  width: 80px;
  margin-right: 30px;
  padding: 10px;
`;

const Wrapper = styled.div`
  margin-top: 20px;
  margin-right: 60px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  padding: 100px;

  opacity: 0;
  transition: opacity 1.5s ease-in-out;

  &.visible {
    opacity: 1;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    margin-top: 0px;
  }
`;

const BoxDiv = styled.div`
  display: flex;
  align-items: center;
  width: 300px;
  padding: 10px;
  @media (max-width: 768px) {

    margin-top: 25px;
  }

`;

const Line = styled.div`
  height: 100px;
  border-left: 1px solid #ffbe33;
  position: relative;
  left: 44px;
  margin-top: 10px;
  margin-bottom: 10px;
`;
