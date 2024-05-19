import React, { useState, useEffect } from "react";
import styled from "styled-components";
import CircularProgress from "@mui/material/CircularProgress";
import laval from "../assets/laval.jpg";
import montreal from "../assets/montreal.jpg";
import flattire from "../assets/flattire.jpg";
import charger from "../assets/charger.jpg";
import motorcycle from "../assets/motorcycle.jpg";
import cartow from "../assets/cartow.jpg";
import textmessage from "../assets/textmessage.png";

const Services = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading delay (remove in actual implementation)
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 2000); // Adjust the timeout duration as needed

    // Clean up function to clear the timeout
    return () => clearTimeout(timeout);
  }, []);

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
              <Icon src={flattire} alt="" />
              <p>
                Flat-tire replacement <br /> Get back on your way in no time
                with a properly installed tire
              </p>
            </ServiceDiv>
            <ServiceDiv>
              <Icon src={charger} />
              <p>
                Battery test/or boost<br />Have your battery checked or
                replaced on the spot, wherever you may be
              </p>
            </ServiceDiv>
            <ServiceDiv>
              <Icon src={motorcycle} />
              <p>
                Motorcycle Towing<br />we'll come to help even if you're riding
                a motorcycle
              </p>
            </ServiceDiv>
            <ServiceDiv>
              <Icon src={cartow} />
              <p>
                Car Towing <br />
                Let us give you a lift to your place at the same time of the
                request
              </p>
            </ServiceDiv>
          </DetailedServiceText>
          <Section>
            <TextMessageImg src={textmessage} alt="" />
            <CitiesDiv>
              <City>
                <Title>Montreal</Title>
                <CityImage src={montreal} alt="" />
              </City>
              <City>
                <Title>Laval</Title>
                <CityImage src={laval} alt="" />
              </City>
            </CitiesDiv>
          </Section>
        </Wrapper>
      )}
    </>
  );
};

const Title = styled.span`
  font-size: 50px;
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

const CityImage = styled.img`
  width: 100%;
`;

const Icon = styled.img`
  height: 100px;
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

const TextMessageImg = styled.img`
  border-radius: 20px;
  height: 600px;
`;

const DetailedServiceText = styled.div`
  display: flex;
`;

export default Services;
