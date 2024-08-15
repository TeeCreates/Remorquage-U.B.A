import React, { useState, useEffect } from "react";
import styled from "styled-components";
import CircularProgress from "@mui/material/CircularProgress";
import  TextMessage from "../TextMessage";
import landscape from "../assets/landscape.png"
const About = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Set loading to false when component mounts
    setLoading(false);

    // Cleanup function to perform actions when component unmounts
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
        < BackgroundImg src={landscape} alt="" />
        <AboutUs>

        <H1>
About Us
    </H1>
<AboutDescription>
<P>Founded by Mr. Sinnathamby, Remorquage U.B.A has proudly served the Montreal and Laval communities since 2014, offering reliable and professional towing services. With a focus on customer safety and satisfaction, we’ve earned the trust of thousands of drivers over the years.</P>
<P>Our fleet of modern flatbed and wheel lift tow trucks is equipped with state-of-the-art technology, allowing us to handle a wide range of situations, from routine breakdowns to more complex towing needs. Whether you’re stranded with a flat tire, need a battery boost, or require long-distance towing, our fast and efficient service is designed to minimize your stress and get you back on the road as quickly as possible.
</P>
<P>What sets us apart is our commitment to professionalism and our personalized approach to each job. We understand that being stranded on the road can be a daunting experience, so we strive to provide not just a service, but also peace of mind. Our team is multilingual, speaking French, English, and Tamil, ensuring that we can assist a diverse clientele with clear communication and understanding.
</P>
<P>At Remorquage U.B.A, we are more than just a towing company—we are your roadside partner, dedicated to keeping you safe and secure, wherever the road takes you.</P>



</AboutDescription>
        
        </AboutUs>
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


export default About;

const H1 = styled.h1`
  font-weight: bolder;
  font-size: 50px;
  color: white;
  white-space: nowrap;
  @media (max-width: 768px) {
    font-size: 30px;
  }
`;

const AboutUs = styled.div`
display: flex;
flex-direction: column;
align-items: center;
margin-top: 50px;
padding: 100px;
`

const AboutDescription = styled.div`
width: 650px;
display: flex;
flex-direction: column;


`

const BackgroundImg = styled.img`
width: 100%;
`

const P = styled.p`
margin-bottom: 15px;
`