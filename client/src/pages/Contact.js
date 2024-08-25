import React, { useState, useEffect, useContext, useRef } from "react";
import styled from "styled-components";
import CircularProgress from "@mui/material/CircularProgress";
import contact from "../assets/contact.png";
import Footer from "../Footer";
import { LanguageContext } from "../LanguageContext";
import emailjs from '@emailjs/browser';

const Contact = () => {
  const [loading, setLoading] = useState(true);
  const { contactObject } = useContext(LanguageContext);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false); // Track form submission status
  const form = useRef();

  useEffect(() => {
    setLoading(false);
  }, []);

  useEffect(() => {
    if (submitted) {
      const timer = setTimeout(() => {
        setSubmitted(false);
      }, 5000); // Hide the banner after 5 seconds

      return () => clearTimeout(timer);
    }
  }, [submitted]);

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);

    const serviceId = 'service_y4v291s';
    const templateId = 'template_5ih7tps';
    const publicKey = '-vWuhm-wyimkodNeL';

    emailjs
      .sendForm(serviceId, templateId, form.current, {
        publicKey: publicKey,
      })
      .then((response) => {
        console.log('Email sent successfully!', response);
        // Clear the input fields
        setName('');
        setEmail('');
        setMessage('');
        setSubmitted(true); // Set submitted state to true
      })
      .catch((error) => {
        console.error('Error sending email:', error);
      })
      .finally(() => {
        setLoading(false); // Hide loading indicator
      });
  }

  return (
    <>
      {submitted && <SuccessBanner>{contactObject.successMessage}</SuccessBanner>}
      {loading ? (
        <LoadingContainer>
          <CircularProgress style={{ color: "#FFBE33", zIndex: "99" }} />
        </LoadingContainer>
      ) : (
        <>
          <Wrapper>
            <ImageContainer>
              <Image src={contact} alt="Contact" />
            </ImageContainer>
            <FormWrapper>
              <Form id="contact-form" ref={form} onSubmit={sendEmail}>
                <H1>{contactObject.title}</H1>
                <Label>{contactObject.name}</Label>
                <Input type="text" name="user_name" placeholder={contactObject.namePlaceholder} onChange={(e) => setName(e.target.value)} value={name} />
                <Label>{contactObject.email}</Label>
                <Input type="email" name="user_email" placeholder={contactObject.emailPlaceholder} onChange={(e) => setEmail(e.target.value)} value={email} />
                <Label>{contactObject.message}</Label>
                <Textarea name="message" placeholder={contactObject.messagePlaceholder} onChange={(e) => setMessage(e.target.value)} value={message} />
                <SubmitButton type="submit" value={contactObject.send} />
              </Form>
            </FormWrapper>
          </Wrapper>
          <Footer />
        </>
      )}
    </>
  );
};

// Styled components
const SuccessBanner = styled.div`
  background-color: #4CAF50;
  color: white;
  padding: 10px;
  text-align: center;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  animation: slideDown 0.5s ease-out;

  @keyframes slideDown {
    from {
      transform: translateY(-100%);
    }
    to {
      transform: translateY(0);
    }
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
  display: flex;
  justify-content: space-between;
  z-index: 100;
  padding: 20px;

  @media (max-width: 895px) {
    flex-direction: column;
    align-items: center;
  }
`;

const ImageContainer = styled.div`
  width: 55%;

  @media (max-width: 895px) {
    width: 100%;
    margin-bottom: 20px;
  }
`;

const Image = styled.img`
  width: 100%;
  height: auto;
`;

const FormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  border: 1px solid #ffbe33;
  padding: 20px;
  width: 40%;

  @media (max-width: 895px) {
    width: 100%;
    box-sizing: border-box;
  }
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const Label = styled.label`
  margin-bottom: 5px;
`;

const Input = styled.input`
  margin-bottom: 15px;
  padding: 10px;
  font-size: 16px;
  color: black;
  width: 95%;
`;

const Textarea = styled.textarea`
  margin-bottom: 15px;
  padding: 10px;
  font-size: 16px;
  height: 100px;
  color: black;
  width: 95%;
`;

const SubmitButton = styled.input`
  padding: 10px 20px;
  background-color: #ffbe33;
  color: white;
  border: none;
  cursor: pointer;
  font-size: 16px;
  width: 100%;
`;

const H1 = styled.span`
  font-size: 50px;
  color: white;
  font-family: "Russo One", sans-serif;
  display: flex;
  align-self: center;
  margin-bottom: 20px;

  @media (max-width: 768px) {
    font-size: 36px;
  }
`;

export default Contact;