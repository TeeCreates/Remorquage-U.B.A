import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import CircularProgress from "@mui/material/CircularProgress";
import laval from "../assets/laval.png";
import montreal from "../assets/montreal.png";
import flattire from "../assets/flattire.jpg";
import charger from "../assets/charger.jpg";
import motorcycle from "../assets/motorcycle.jpg";
import cartow from "../assets/cartow.jpg";
import textmessage from "../assets/textmessage.mp4";
import tire from "../assets/tire.jpg";
import boost from "../assets/boost.jpg";
import cycletow from "../assets/motorcycletow.jpg";
import tow from "../assets/tow.jpg";
import Loading from "./Loading";
import TextMessage from "../TextMessage";

const Services = () => {
  const [loading, setLoading] = useState(true);
  const imageSources = [
    laval,
    montreal,
    flattire,
    charger,
    motorcycle,
    cartow,
    tire,
    boost,
    cycletow,
    tow,
  ];

  const isMounted = useRef(false);

  useEffect(() => {
    isMounted.current = true;
    const loadImage = (src) => {
      return new Promise((resolve, reject) => {
        const img = new Image();
        img.src = src;
        img.onload = resolve;
        img.onerror = reject;
      });
    };

    const preloadImages = async () => {
      try {
        await Promise.all(imageSources.map((src) => loadImage(src)));
        if (isMounted.current) {
          setLoading(false);
        }
      } catch (error) {
        console.error("Failed to load images", error);
      }
    };

    preloadImages();

    return () => {
      isMounted.current = false;
    };
  }, [imageSources]);

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
              <HumanTouchImg src={tire} alt="" />
              <Icon src={flattire} alt="" />
              <p>
                Flat-tire replacement </p> <p> Get back on your way in no time
                with a properly installed tire
              </p>
            </ServiceDiv>
            <ServiceDiv>
              <HumanTouchImg src={boost} alt="" />
              <Icon src={charger} alt="" />
              <p>
                Battery test/or boost</p> <p>Have your battery checked or
                replaced on the spot, wherever you may be
              </p>
            </ServiceDiv>
            <ServiceDiv>
              <HumanTouchImg src={cycletow} alt="" />
              <Icon src={motorcycle} alt="" />
              <p>
                Motorcycle Towing</p> <p>we'll come to help even if you're riding
                a motorcycle
              </p>
            </ServiceDiv>
            <ServiceDiv>
              <HumanTouchImg src={tow} alt="" />
              <Icon src={cartow} alt="" />
              <p>
                Car Towing </p> <p>
                Let us give you a lift to your place at the same time of the
                request
              </p>
            </ServiceDiv>
          </DetailedServiceText>
       <LocationWrapper>
       <TextMessage />
       <h3>Servicing both Montreal and Laval</h3>
       </LocationWrapper>

        </Wrapper>
      )}
    </>
  );
};

const Title = styled.h1`
  font-weight: bolder;
  font-size: 50px;
  color: white;
  white-space: nowrap;
  @media (max-width: 768px) {
    font-size: 30px;
  }
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
  @media (max-width: 768px) {
    padding: 10px;
  }
`;

const DetailedServiceText = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-bottom: 50px;
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

const ServiceDiv = styled.div`
  border: 1px solid #ffbe33;
  width: 100%;
  max-width: 300px; /* Adjust max width as needed */
  margin: 15px;
  padding: 20px;
  box-sizing: border-box;
  text-align: left;
display: flex;
align-items: center;
flex-direction: column;
  &:hover {
    transform: scale(1.05);
  }

  &:hover p {
    color: #ffbe33;
  }

  p {
    color: white;
    transition: color 0.4s ease;
  }

  @media (max-width: 768px) {
    width: 90%; /* Adjust width to fit mobile screens */
    margin: 10px;
    padding: 15px;
  }
`;

const HumanTouchImg = styled.img`
  height: 150px;
  width: auto;
  max-width: 100%; /* Make sure the image is responsive */
`;

const Icon = styled.img`
  height: 50%;
  width: 50%;
  max-width: 100%; /* Make sure the icon is responsive */
  @media (max-width: 768px) {
    height: 25%;
  width: 25%;
  }
`;


const LocationWrapper = styled.div`
display: flex;
flex-direction: row;
justify-content: space-around;
align-items: center;
@media (max-width: 768px) {
  flex-direction: column;
  
  }
`
export default Services;
