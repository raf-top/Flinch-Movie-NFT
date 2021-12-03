// Styled Components
import styled from "styled-components";

// Components
import Nav from "../Global/Nav/Nav";
import InfoTwo from "./InfoTwo/InfoTwo";
import InfoThree from "./InfoThree/InfoThree";

import Footer from "../Global/Footer/Footer";

const NFT = () => {
  return (
    <Wrapper>
      <Nav />
      <InfoTwo />
      <div className="footer-block">
      <Footer />
      </div>
      
    </Wrapper>
  );
};

export default NFT;

const Wrapper = styled.div``;
