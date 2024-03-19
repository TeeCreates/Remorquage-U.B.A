import React, { useRef, useEffect, useState } from "react";
import boxIcon from "./assets/boxIcon.jpg";
import styled from "styled-components";

export const Section2 = () => {
  const wrapperRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

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
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Wrapper ref={wrapperRef} className={isVisible ? "visible" : ""}>
      <div>
        <h3>Reliable</h3>
        <H1>Request a Tow and Know </H1>
        <H1>What to Expect</H1>
      </div>
      <div>
        <div>
          <BoxDiv>
            <BoxIconImg src={boxIcon} alt="" />
            <H2>Easy Process</H2>
          </BoxDiv>
          <Line></Line>
        </div>
        <div>
          <BoxDiv>
            <BoxIconImg src={boxIcon} alt="" />
            <H2>Fast Response</H2>
          </BoxDiv>
          <Line></Line>
        </div>
        <div>
          <BoxDiv>
            <BoxIconImg src={boxIcon} alt="" />
            <H2>Safe and Secure</H2>
          </BoxDiv>
          <Line></Line>
        </div>
        <div>
          <BoxDiv>
            <BoxIconImg src={boxIcon} alt="" />
            <H2>Transparent Pricing</H2>
          </BoxDiv>
        </div>
      </div>
    </Wrapper>
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
  transition: opacity 1s ease-in-out;

  &.visible {
    opacity: 1;
  }
`;

const BoxDiv = styled.div`
  display: flex;
  align-items: center;
  width: 300px;
  padding: 10px;
`;

const Line = styled.div`
  height: 100px;
  border-left: 1px solid #ffbe33;
  position: relative;
  left: 44px;
  margin-top: 10px;
  margin-bottom: 10px;
`;
