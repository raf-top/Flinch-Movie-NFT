// React
import { useState } from "react";

// Styled Components
import styled from "styled-components";

// Next
import Link from "next/link";
import Image from 'next/image'
// Material UI
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

// Framer Motion
import { AnimatePresence } from "framer-motion";

// Components
import NavLinks from "./NavLinks/NavLinks";
import NavLinksMobile from "./NavLinksMobile/NavLinksMobile";

const Nav = () => {
  const [mobileLinks, setMobileLinks] = useState("");

  const mobileMenuHandler = () => {
    setMobileLinks((prev) => !prev);

    // document.body.classList.toggle("disable-scrolling");
  };

  return (
    <Wrapper>
      
        <img
          src="https://ammedodi.sirv.com/Images/flinch-movie-logo-300x107.png"
          alt="logo"
          className="logo"
        />
      
      {!mobileLinks && (
        <MenuIcon className="mobile-menu" onClick={mobileMenuHandler} />
      )}
      {mobileLinks && (
        <CloseIcon className="mobile-menu" onClick={mobileMenuHandler} />
      )}
      <AnimatePresence exitBeforeEnter>
        {mobileLinks && (
          <NavLinksMobile mobileMenuHandler={mobileMenuHandler} />
        )}
      </AnimatePresence>
      <NavLinks />
    </Wrapper>
  );
};

export default Nav;

const Wrapper = styled.nav`
  //
  padding: 0 50px;
  @media only screen and (max-width: 600px) {
    padding: 0 20px;
  }
  //

  border-bottom: 2px solid #eaa721;

  position: fixed;
  z-index: 99999;
  background-color: #191919;
  top: 0;

  width: 100%;

  display: flex;
  justify-content: space-between;
  align-items: center;

  .mobile-menu {
    display: none;
    color: #eaa721;
    z-index: 1001;
    cursor: pointer;
    width: 50px;
    height: 40px;
    @media only screen and (max-width: 1275px) {
      display: block;
    }
  }

  .logo {
    width: 225px;
    @media only screen and (max-width: 1000px) {
      width: 200px;
    }

    cursor: pointer;
  }
`;
