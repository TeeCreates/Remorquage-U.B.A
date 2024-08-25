import React, { useState, useEffect, useContext } from "react";
import styled from "styled-components";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdClose } from "react-icons/md";
import { LanguageContext } from "./LanguageContext";

const Navbar = () => {
  const [activeLink, setActiveLink] = useState(window.location.pathname);
  const [menuOpen, setMenuOpen] = useState(false);
  const { navbarObject, setLanguage, language } = useContext(LanguageContext);

  useEffect(() => {
    setActiveLink(window.location.pathname);
  }, []);

  const handleNavigation = (path) => {
    setActiveLink(path);
    window.location.href = path;
    setMenuOpen(false);
    document.body.style.overflowX = "";
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
    document.body.style.overflowX = menuOpen ? "" : "hidden";
  };

  useEffect(() => {
    const handleResize = () => {
      setMenuOpen(false);
      document.body.style.overflowX = "";
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <NavbarWrapper>
      <ClickableH1 onClick={() => handleNavigation("/")}>
        REMORQUAGE U.B.A
      </ClickableH1>
      <HamburgerMenu onClick={toggleMenu}>
        {menuOpen ? (
          <MdClose size={25} color={"#ffbe33"} />
        ) : (
          <GiHamburgerMenu size={25} color={"#ffbe33"} />
        )}
      </HamburgerMenu>
      <NavLinks open={menuOpen}>
        <Button
          onClick={() => handleNavigation("/")}
          className={activeLink === "/" ? "active" : ""}
        >
          {navbarObject.home}
        </Button>
        <Button
          onClick={() => handleNavigation("/services")}
          className={activeLink === "/services" ? "active" : ""}
        >
          {navbarObject.services}
        </Button>
        <Button
          onClick={() => handleNavigation("/about")}
          className={activeLink === "/about" ? "active" : ""}
        >
          {navbarObject.about}
        </Button>
        <Button
          onClick={() => handleNavigation("/contact")}
          className={activeLink === "/contact" ? "active" : ""}
        >
          {navbarObject.contact}
        </Button>
        <LanguageButton 
          onClick={() => setLanguage("en")} 
          className={language === "en" ? "active" : ""}
        >
          En
        </LanguageButton>
        <LanguageButton 
          onClick={() => setLanguage("fr")} 
          className={language === "fr" ? "active" : ""}
        >
          Fr
        </LanguageButton>
      </NavLinks>
    </NavbarWrapper>
  );
};


const NavbarWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  color: #ffbe33;
  position: fixed; // Change from relative to fixed
  top: 0;
  left: 0;
  right: 0;
  height: 60px;
  padding-top: 10px;
  align-items: center;
  background-color: #000; // Add a background color
  z-index: 1000; // Ensure it's above other content

  @media (max-width: 450px) {
    flex-direction: row;
  }
`;

const NavLinks = styled.div`
  display: flex;
  align-items: center;
  overflow-y: auto;
  overflow-x: hidden;

  @media (max-width: 768px) {
    flex-direction: column;
    position: fixed; // Change from absolute to fixed
    top: 60px;
    right: ${(props) => (props.open ? '0' : '-100%')}; // Use percentage instead of pixels
    background: rgba(0,0,0,0.9);
    width: 100%; // Full width of the viewport
    max-width: 375px; // Maximum width
    height: calc(100vh - 60px); // Subtract navbar height
    z-index: 999;
    box-shadow: -10px 0 10px rgba(0,0,0,0.1);
    transition: right 0.3s ease;
    font-size: 25px;
    font-weight: bold;
  }
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
  color: white;

  &:hover {
    background-position: left bottom;
    color: black;
  }

  &.active {
    background: #ffbe33;
    color: black;
  }
  @media (max-width: 768px) {
    border: none;
    width: 100%;
display: flex;
  }
`;

const ClickableH1 = styled.h1`
  font-family: "Russo One", sans-serif;
  font-weight: bold;
  margin-left: 10px;
  font-size: 25px;
  color: #ffbe33;
  cursor: pointer;

  &:hover {
    color: #ffbe33;
  }
`;

const HamburgerMenu = styled.div`
  display: none;
  flex-direction: column;
  cursor: pointer;
  margin-right: 20px;

  @media (max-width: 768px) {
    display: flex;
  }
`;

const LanguageButton = styled(Button)`
  &.active {
    background-position: left bottom;
    color: black;
  }
`;

export default Navbar;
