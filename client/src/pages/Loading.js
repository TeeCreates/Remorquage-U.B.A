import React from "react";
import styled from "styled-components";
import CircularProgress from "@mui/material/CircularProgress";

const LoadingIndicator = () => {
  return (
    <LoadingContainer>
      <CircularProgress style={{ color: "#FFBE33" }} />
    </LoadingContainer>
  );
};

const LoadingContainer = styled.div`
 
  display: flex;
  justify-content: center;
  align-items: center;
`;


export default LoadingIndicator;
