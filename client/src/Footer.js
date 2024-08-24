
import styled from "styled-components";
import React, { useContext } from "react";
import { LanguageContext } from "./LanguageContext";
const Footer = () => {
    const { footerObject } = useContext(LanguageContext);
    console.log("footer obkec", footerObject)
  return (
    <FooterWrapper>
      <FooterContent>
        <Column>
          <Title>{footerObject.services}</Title>
          <Link href="/services">{footerObject.services}</Link>
        </Column>
        <Column>
          <Title>{footerObject.aboutUs}</Title>
          <Link href="/about">{footerObject.ourStory}</Link>
        </Column>
        <Column>
          <Title>{footerObject.contact}</Title>
          <Link href="/contact">{footerObject.getInTouch}</Link>
        </Column>
        <Column>
          <Title>{footerObject.followUs}</Title>
          <Link href="https://www.instagram.com/remorquageubamtl/" target="_blank" rel="noopener noreferrer">Instagram</Link>
          <PhoneNumber>{footerObject.phone} 514-343-2345</PhoneNumber>
        </Column>
      </FooterContent>
    </FooterWrapper>
  );
};

const FooterWrapper = styled.footer`
  background-color: #333;
  color: white;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const FooterContent = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  max-width: 1200px;
  margin-bottom: 10px;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

const Column = styled.div`
  flex: 1;
  margin: 0 20px;

  @media (max-width: 768px) {
    margin: 10px 0;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

const Title = styled.h3`
  margin-bottom: 10px;
`;

const Link = styled.a`
  color: white;
  text-decoration: none;
  margin-bottom: 5px;
  display: block;

  &:hover {
    text-decoration: underline;
  }
`;

const PhoneNumber = styled.p`
  margin-top: 10px;
`;

const Copyright = styled.p`
  margin-top: 10px;
  font-size: 14px;
`;

export default Footer;