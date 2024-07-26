import React from 'react';
import styled, { keyframes } from 'styled-components';

// Define keyframes for rising effect
const riseUp = keyframes`
  from {
    opacity: 0;

    transform: translateY(20px);
  }
  to {

    opacity: 1;
    transform: translateY(0);
  }
`;
const TextMessage = () => {
  // Text message object
  const messages = [
    { sender: "client", text: "Hey! I need your help. I am stuck in Laval 😢 and I need a tire change 🚗" },
    { sender: "operator", text: "Don't worry, remorquage will be there to help 😊  What is your location?" },
    { sender: "client", text: "239 Bell Petit Ave, Y7J3D7" },
    { sender: "operator", text: "On our way!" },
    { sender: "operator", text: "We are here 😊" },
    { sender: "client", text: "Wow!! That was quick, I will come out the car" }
  ];

  return (
    <>
      <Top>
        <span>item one</span>
        <span>item two</span>
      </Top>
      <Middle>
        TEXT MESSAGE
        {messages.map((item, index) => {
          const isUser = item.sender === "client";
          return (
            <MessageRow key={index} isUser={isUser}>
              <Bubble isUser={isUser} animationDelay={`${index * 1.2}s`}>
                {item.text}
              </Bubble>
            </MessageRow>
          );
        })}
      </Middle>
      <Bottom>
        <div>smile</div>
        <div>Enter your message here</div>
        <div>send</div>
      </Bottom>
    </>
  );
};

export default TextMessage;

const Middle = styled.div`
  background-color: white;
  width: 320px;
  height: 470px;
  overflow-y: auto;
`;

const Top = styled.div`
  background-color: grey;
  width: 320px;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  height: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Bottom = styled.div`
  background-color: grey;
  width: 320px;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  height: 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
`;

const MessageRow = styled.div`
  display: flex;
  justify-content: ${props => props.isUser ? 'flex-end' : 'flex-start'};
  padding: 10px;
  color: black;
`;

const Bubble = styled.span`
  background-color: ${props => props.isUser ? '#40AFF7' : '#EBEBEB'};
  margin-left: ${props => props.isUser ? '40px' : '10px'};
  margin-right: ${props => props.isUser ? '10px' : '40px'};
  padding: 10px;
  color: ${props => props.isUser ? 'white' : 'black'};
  box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  max-width: 70%;
  opacity: 0;
  animation: ${riseUp} 0.5s ease-in-out forwards;
  animation-delay: ${props => props.animationDelay};
  animation-name: ${riseUp};
  animation-duration: 0.5s;
  animation-timing-function: ease-in-out;
  animation-fill-mode: forwards;
`;




