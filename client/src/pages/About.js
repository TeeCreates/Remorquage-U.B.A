import React, { useState, useEffect } from "react";
import styled from "styled-components";
import CircularProgress from "@mui/material/CircularProgress";
import  TextMessage from "../TextMessage";

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
        
        <div>
about items
    </div>
    <TextMessage/>
        
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
