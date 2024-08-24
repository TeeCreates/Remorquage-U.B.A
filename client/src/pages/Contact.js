import React, { useState, useEffect, useContext } from "react";
import styled from "styled-components";
import CircularProgress from "@mui/material/CircularProgress";
import contact from "../assets/contact.png";
import Footer from "../Footer";
import { LanguageContext } from "../LanguageContext"; // Adjust the import path as necessary

const Contact = () => {
  const [loading, setLoading] = useState(true);
  const { contactObject } = useContext(LanguageContext);

  useEffect(() => {
    setLoading(false);
  }, []);

  return (
    <>
      {loading ? (
        <LoadingContainer>
          <CircularProgress style={{ color: "#FFBE33", zIndex: "99" }} />
        </LoadingContainer>
      ) : (
        <>
          <Wrapper>
            <Image src={contact} alt="Contact" />
            <FormWrapper>
              <Form id="contact-form">
                <H1>{contactObject.title}</H1>
                <Label>{contactObject.name}</Label>
                <Input type="text" name="user_name" placeholder={contactObject.namePlaceholder} />
                <Label>{contactObject.email}</Label>
                <Input type="email" name="user_email" placeholder={contactObject.emailPlaceholder} />
                <Label>{contactObject.message}</Label>
                <Textarea name="message" placeholder={contactObject.messagePlaceholder} />
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

const Image = styled.img`
  width: 55%;

  @media (max-width: 895px) {
    width: 100%; /* Make the image take up more width on smaller screens */
    margin: 0 auto;
  }
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  z-index: 100; /* Ensure this is above any other elements */
  padding: 20px;

  @media (max-width: 895px) {
    flex-direction: column;
    align-items: center; /* Center the items on smaller screens */
    padding: 20px;
  }
`;

const FormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  border: 1px solid #ffbe33;
  padding: 20px 80px;
  margin-right: 10px;

  @media (max-width: 895px) {
    padding: 20px;
    margin: 0;
    width: 100%; /* Make the form wrapper take up full width */
    box-sizing: border-box;
    margin-top: 20px;
    
  }
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  margin: 0 30px;

  @media (max-width: 895px) {
    margin: 0;
    padding: 30px;

  }
`;

const Label = styled.label`
  margin-bottom: 5px;
`;

const Input = styled.input`
  margin-bottom: 15px;
  width: 320px;
  padding: 10px;
  font-size: 16px;
  color: black; /* Set font color to black */

  @media (max-width: 895px) {
    width: 95%; /* Make input fields take up full width on smaller screens */
  }
`;

const Textarea = styled.textarea`
  margin-bottom: 15px;
  width: 320px;
  padding: 10px;
  font-size: 16px;
  height: 100px;
  color: black; /* Set font color to black */

  @media (max-width: 895px) {
    width: 95%; /* Make textarea take up full width on smaller screens */
  }
`;

const SubmitButton = styled.input`
  padding: 10px 20px;
  background-color: #ffbe33;
  width: 340px;
  color: white;
  border: none;
  cursor: pointer;
  font-size: 16px;

  @media (max-width: 895px) {
    width: 100%; /* Make submit button take up full width on smaller screens */
  }
`;

const H1 = styled.span`
  font-size: 50px;
  color: white;
  font-family: "Russo One", sans-serif;
  display: flex;
  align-self: center;
  margin-bottom: 20px;

  @media (max-width: 768px) {
    font-size: 36px; /* Adjust font size for smaller screens */
  }
`;

export default Contact;
