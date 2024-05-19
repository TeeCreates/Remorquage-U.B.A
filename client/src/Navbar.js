import React, { useState } from "react";
import styled from "styled-components";

const Navbar = () => {
  const [activeLink, setActiveLink] = useState(null);

  const handleNavigation = (path) => {
    window.location.href = path;
    setActiveLink(path); // Set active link when clicked
  };

  return (
    <NavbarWrapper>
      <ClickableH1 href="/">REMORQUAGE U.B.A</ClickableH1>
      <NavLinks>
        <Button
          onClick={() => handleNavigation("/services")}
          className={activeLink === "/services" ? "active" : ""}
        >
          Services
        </Button>
        <Button
          onClick={() => handleNavigation("/about")}
          className={activeLink === "/about" ? "active" : ""}
        >
          About Us
        </Button>
        <Button
          onClick={() => handleNavigation("/contact")}
          className={activeLink === "/contact" ? "active" : ""}
        >
          Contact
        </Button>
      </NavLinks>
    </NavbarWrapper>
  );
};

const NavbarWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  color: #ffbe33;
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
  border: 1px solid #ffbe33;
  padding: 10px;
  background: linear-gradient(
    to right,
    #ffbe33 0%,
    #ffbe33 50%,
    transparent 50%,
    transparent 100%
  );
  background-size: 200% 100%;
  background-position: right bottom;
  transition: background-position 0.4s ease, color 0.4s ease;

  &:hover,
  &.active {
    background-position: left bottom;
    color: black;
  }

  &.active {
    font-weight: bold;
    background: #ffbe33; /* Set background color to #ffbe33 when active */
  }
`;

const ClickableH1 = styled.a`
  font-family: "Russo One", sans-serif;
  font-weight: bold;
  margin-left: 53px;
  font-size: 25px;
  text-decoration: none;
  color: #ffbe33;
  cursor: pointer;

  &:hover {
    cursor: pointer;
  }
`;

export default Navbar;
