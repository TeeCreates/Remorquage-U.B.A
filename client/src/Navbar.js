import React from "react";
import styled from "styled-components";

const Navbar = () => {
    const handleNavigation = (path) => {
        window.location.href = path;
      };
  return (
    <NavbarWrapper>
      <ClickableH1 href="/">REMORQUAGE U.B.A</ClickableH1>
      <NavLinks>
        <Button onClick={() => handleNavigation("/services")}>Services</Button>
        <Button onClick={() => handleNavigation("/about")}>About Us</Button>
        <Button onClick={() => handleNavigation("/contact")}>Contact</Button>
      </NavLinks>
    </NavbarWrapper>
  );
};

const NavbarWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  color: #FFBE33;
  position: relative;
  height: 60px;
  padding-top: 10px;
  align-items: center;
  margin-right: 20px;
`;

const NavLinks = styled.div`
  display: flex;
  align-items: center;
`;

const Button = styled.button`
  margin-right: 10px;
  border: 1px solid #FFBE33;
  padding: 10px;
  background: linear-gradient(to right, #FFBE33 0%, #FFBE33 50%, transparent 50%, transparent 100%);
  background-size: 200% 100%;
  background-position: right bottom;
  transition: background-position 0.4s ease;

  &:hover {
    background-position: left bottom;
    color: black;
  }
`;

const ClickableH1 = styled.a`
  font-family: "Russo One", sans-serif;
  font-weight: bold;
  margin-left: 53px;
  font-size: 25px;
  text-decoration: none;
  color: #FFBE33;
  cursor: pointer;

  &:hover {
 cursor: pointer;
  }
`;

export default Navbar;
