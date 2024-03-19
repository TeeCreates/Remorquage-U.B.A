import styled from "styled-components"
export const Navbar = () =>{
    return(
        <NavbarWrapper>
        <H1>REMORQUAGE U.B.A</H1>
        <div>
        <Button>Services</Button>
        <Button>About Us</Button>
        <Button>Contact</Button>
        </div>
    
     


        </NavbarWrapper>
    )
    
    }


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
    `

    const Button = styled.button`
   margin-right: 10px;
    border: 1px solid #FFBE33;
    padding: 10px;
    background: linear-gradient(to right, #FFBE33 0%, #FFBE33 50%, transparent 50%, transparent 100%);
    background-size: 200% 100%;
    background-position: right bottom;
    transition: background-position 0.4s ease; /* Smooth transition for background position */

    &:hover {
        background-position: left bottom;
        color: black;
    }
    `

    const H1 = styled.h1`
    font-family: "Russo One", sans-serif;
    font-weight: bold;
    margin-left: 53px;
    font-size: 25px;
    `