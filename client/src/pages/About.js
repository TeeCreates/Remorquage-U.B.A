import React, { useState, useEffect, useContext } from "react";
import styled from "styled-components";
import CircularProgress from "@mui/material/CircularProgress";
import TextMessage from "../TextMessage";
import landscape from "../assets/landscape.png";
import { LanguageContext } from "../LanguageContext";
import Footer from "../Footer";

const About = () => {
  const [loading, setLoading] = useState(true);
  const { aboutUsObject } = useContext(LanguageContext);

  useEffect(() => {
    setLoading(false);
    return () => {
      // Add cleanup code here if needed
    };
  }, []);

  return (
    <>
      {loading ? (
        <LoadingContainer>
          <CircularProgress style={{ color: "#FFBE33" }} />
        </LoadingContainer>
      ) : (
        <>
        <Wrapper>
          <BackgroundImg src={landscape} alt="" />
          <AboutUs>
            <H1>{aboutUsObject.title}</H1>
            <AboutDescription>
              <P>{aboutUsObject.p1}</P>
              <P>{aboutUsObject.p2}</P>
              <P>{aboutUsObject.p3}</P>
              <P>{aboutUsObject.p4}</P>
            </AboutDescription>
          </AboutUs>
 
        </Wrapper>
        <Footer />
        </>
      )}

    </>
  );
};

const LoadingContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Wrapper = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
  box-sizing: border-box;
`;

const H1 = styled.h1`
  font-weight: bolder;
  font-size: 50px;
  color: white;
  text-align: center;
  margin-bottom: 30px;

  @media (max-width: 768px) {
    font-size: 30px;
  }
`;

const AboutUs = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 50px;
`;

const AboutDescription = styled.div`
  width: 100%;
  max-width: 650px;
  display: flex;
  flex-direction: column;
`;

const BackgroundImg = styled.img`
  width: 100%;
  height: auto;
  object-fit: cover;
`;

const P = styled.p`
  margin-bottom: 15px;
  line-height: 1.6;
  color: white;
  text-align: justify;

  @media (max-width: 768px) {
    font-size: 14px;
  }
`;

export default About;