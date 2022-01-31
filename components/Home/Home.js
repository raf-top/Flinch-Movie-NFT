// Styled Components
import styled from "styled-components";

// Components
import Background from "../Global/Background/Background";
import Mint from "./Mint/Mint";
import InfoOne from "./InfoOne/InfoOne";
import Carousel from "./Carousel/Carousel";
import Roadmap from "./Roadmap/Roadmap";
import Team from "./Team/Team";
import InfoFour from "./InfoFour/InfoFour";
import Links from "./Links/Links";
const Home = () => {
  return (
    <Wrapper>
      {/* <Background /> */}


      <Mint />

      <InfoOne />
      <Carousel />
      {/* <InfoTwo /> */}

      <InfoFour />

      {/* <InfoThree /> */}
      <Roadmap />
      <Team />
      <Links />
      
    </Wrapper>
  );
};

export default Home;

const Wrapper = styled.div``;
