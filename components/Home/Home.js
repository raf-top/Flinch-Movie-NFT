// Styled Components
import styled from "styled-components";

// Components
import Nav from "../Global/Nav/Nav.js";
import Background from "../Global/Background/Background";
import Mint from "./Mint/Mint";
import InfoOne from "./InfoOne/InfoOne";
import Carousel from "./Carousel/Carousel";
import Roadmap from "./Roadmap/Roadmap";
import Team from "./Team/Team";
import Footer from "../Global/Footer/Footer";
import InfoFour from "./InfoFour/InfoFour";

const Home = () => {
  return (
    <Wrapper>
      {/* <Background /> */}

      <Nav />
      <Mint />

      <InfoOne />
      <Carousel />
      {/* <InfoTwo /> */}

      <InfoFour />

      {/* <InfoThree /> */}
      <Roadmap />
      <Team />
      <Footer />
    </Wrapper>
  );
};

export default Home;

const Wrapper = styled.div``;
