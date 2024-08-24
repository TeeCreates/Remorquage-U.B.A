import React, { useRef, useEffect, useState, useContext } from 'react';
import styled, { keyframes } from 'styled-components';
import person from "../src/assets/person.png"
import { LuSendHorizonal } from "react-icons/lu";
import { FaRegFaceSmile } from "react-icons/fa6";
import { LanguageContext } from "./LanguageContext";

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

const messagesTranslations = {
  en: [
    { sender: "client", text: "Hey! I need your help. I am stuck in Laval 😢 and I need a tire change 🚗" },
    { sender: "operator", text: "Don't worry, remorquage will be there to help 😊  What is your location?" },
    { sender: "client", text: "239 Bell Petit Ave, Y7J3D7" },
    { sender: "operator", text: "On our way!" },
    { sender: "operator", text: "We are here 😊" },
    { sender: "client", text: "Wow!! That was quick, I will come out the car" }
  ],
  fr: [
    { sender: "client", text: "Salut ! J'ai besoin de votre aide. Je suis bloqué à Laval 😢 et j'ai besoin d'un changement de pneu 🚗" },
    { sender: "operator", text: "Ne vous inquiétez pas, le remorquage sera là pour vous aider 😊 Quelle est votre localisation ?" },
    { sender: "client", text: "239 Avenue Bell Petit, Y7J3D7" },
    { sender: "operator", text: "Nous arrivons !" },
    { sender: "operator", text: "Nous sommes là 😊" },
    { sender: "client", text: "Wow !! C'était rapide, je vais sortir de la voiture" }
  ]
};

const TextMessage = () => {
  const { language } = useContext(LanguageContext);
  const messages = messagesTranslations[language];
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
    // Cleanup function to remove event listener
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Wrapper ref={wrapperRef} className={isVisible ? "visible" : ""}>
      <Top>
        <PersonIcon src={person} alt="" />
        <Contact>Remorquage</Contact>
      </Top>
      <Middle>
        {language === 'en' ? 'TEXT MESSAGE' : 'MESSAGE TEXTE'}
        {messages && messages.map((item, index) => {
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
        <FaRegFaceSmile color={"#D3D3D3"}/>
        <PlaceHolder>{language === 'en' ? 'Enter your message here' : 'Entrez votre message ici'}</PlaceHolder>
        <LuSendHorizonal color={"#D3D3D3"}/>
      </Bottom>
    </Wrapper>
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
  background-color: #FAFAFA;
 color: black;
  width: 320px;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  height: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Bottom = styled.div`
  background-color: #F1F1F1;
  width: 320px;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  height: 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;

`;

const PlaceHolder = styled.span`
  color: #D3D3D3;

`

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



const PersonIcon = styled.img`
height: 30px;
border-radius: 50%;
`
const Contact = styled.span`
color: black;
`


const Wrapper = styled.div`
 opacity: 0;
  transition: opacity 1.5s ease-in-out;

  &.visible {
    opacity: 1;
  }
  @media (max-width: 768px) {
margin-bottom: 30px;
  }
  
`