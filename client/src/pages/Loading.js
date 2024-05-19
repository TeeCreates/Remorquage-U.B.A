import React from "react";
import styled from "styled-components";
import CircularProgress from "@mui/material/CircularProgress";

const Loading = () => {
  return (
    <LoadingContainer>
      <CircularProgress style={{ color: "#FFBE33" }} />
    </LoadingContainer>
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

export default Loading;
