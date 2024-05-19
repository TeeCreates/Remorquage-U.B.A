import React, { useState, useEffect } from "react";
import styled from "styled-components";
import CircularProgress from "@mui/material/CircularProgress";
import laval from "../assets/laval.png";
import montreal from "../assets/montreal.png";
import flattire from "../assets/flattire.jpg";
import charger from "../assets/charger.jpg";
import motorcycle from "../assets/motorcycle.jpg";
import cartow from "../assets/cartow.jpg";
import textmessage from "../assets/textmessage.mp4";
import tire from "../assets/tire.jpg"
import boost from "../assets/boost.jpg"
import cycletow from "../assets/motorcycletow.jpg"
import tow from "../assets/tow.jpg"

const Services = () => {
  const [loading, setLoading] = useState(true);
  const [imagesLoaded, setImagesLoaded] = useState(0);
  const totalImages = 8; // Total number of images to load

  useEffect(() => {
    // Simulate loading delay (remove in actual implementation)
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 2000); // Adjust the timeout duration as needed

    // Clean up function to clear the timeout
    return () => clearTimeout(timeout);
  }, []);

  const handleImageLoad = () => {
    setImagesLoaded(prev => prev + 1);
  };

  useEffect(() => {
    if (imagesLoaded === totalImages) {
      setLoading(false);
    }
  }, [imagesLoaded, totalImages]);

  return (
    <>
      {loading ? (
        <LoadingContainer>
          <CircularProgress style={{ color: "#FFBE33" }} />
        </LoadingContainer>
      ) : (
        <Wrapper>
          <Title>OUR SERVICES</Title>
          <DetailedServiceText>
            <ServiceDiv>
              <HumanTouchImg src={tire} alt="" onLoad={handleImageLoad} />
              <Icon src={flattire} alt="" />
              <p>
                Flat-tire replacement <br /> Get back on your way in no time
                with a properly installed tire
              </p>
            </ServiceDiv>
            <ServiceDiv>
              <HumanTouchImg src={boost} alt="" onLoad={handleImageLoad} />
              <Icon src={charger} alt="" />
              <p>
                Battery test/or boost<br />Have your battery checked or
                replaced on the spot, wherever you may be
              </p>
            </ServiceDiv>
            <ServiceDiv>
              <HumanTouchImg src={cycletow} alt="" onLoad={handleImageLoad} />
              <Icon src={motorcycle} alt="" />
              <p>
                Motorcycle Towing<br />we'll come to help even if you're riding
                a motorcycle
              </p>
            </ServiceDiv>
            <ServiceDiv>
              <HumanTouchImg src={tow} alt="" onLoad={handleImageLoad} />
              <Icon src={cartow} alt="" />
              <p>
                Car Towing <br />
                Let us give you a lift to your place at the same time of the
                request
              </p>
            </ServiceDiv>
          </DetailedServiceText>
          <AnimatedSection>
            <p>SERVICE AREA</p>
            <Section>
              <Video autoPlay muted>
                <source src={textmessage} type="video/mp4" />
                Your browser does not support the video tag.
              </Video>
              <CitiesDiv>
                <City>
                  <CityTitle>Montreal</CityTitle>
                  <CityImage src={montreal} alt="" />
                </City>
                <City>
                  <CityTitle>Laval</CityTitle>
                  <CityImage src={laval} alt="" />
                </City>
              </CitiesDiv>
            </Section>
          </AnimatedSection>
        </Wrapper>
      )}
    </>
  );
};

const Title = styled.span`
  font-size: 50px;
  margin-bottom: 10px;
`;

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
  padding: 20px;
  text-align: center;
  color: #333;
`;

const CitiesDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  margin-top: 20px;
`;

const City = styled.div`
  width: 100%;
`;

const CityTitle = styled.h2`
  font-size: 24px;
`;

const CityImage = styled.img`
  width: 100%;
`;

const Icon = styled.img`
  height: 100px;
`;
const HumanTouchImg = styled.img`
  height: 150px;
  border-radius: 50%;
`;
const ServiceDiv = styled.div`
  border: 1px solid #ffbe33;
  width: 100%;
  margin: 30px;
  padding: 20px;

  &:hover p {
    color: #ffbe33;
  }

  p {
    color: white;
    transition: color 0.4s ease;
  }
`;

const Section = styled.div`
  display: flex;
  width: 100%;
  padding: 50px;
  justify-content: space-around;
  align-items: center;
`;

const Video = styled.video`
  border-radius: 20px;
  height: 600px;
  width: auto;
`;

const DetailedServiceText = styled.div`
  display: flex;
  margin-bottom: 50px;
`;

const AnimatedSection = styled.div`
  animation: slideIn 1s forwards, fadeIn 1s forwards;
  margin-left: 100px;

  @keyframes slideIn {
    from {
      transform: translateY(100%);
    }
    to {
      transform: translateY(0);
    }
  }

  @keyframes fadeIn {
    to {
      opacity: 1;
    }
  }
`;

export default Services;
