// React
import { Fragment } from "react";

// Styled Components
import styled from "styled-components";

// Components
import RoadmapItem from "./RoadmapItem/RoadmapItem";
import Background from "../../Global/Background/Background";

const Roadmap = () => {
  return (
    <Fragment>
  
      <Wrapper id="strategy">       
        <p className="header">The Strategy</p>
        <Background variant={"InfoFour"} />
        <div className="line-wrapper">
          <div className="roadmap-line"></div>
        </div>

        <div className="items">
          <RoadmapItem
            align={"left"}
            img={"https://ammedodi.sirv.com/Images/church.png"}
            title={"10"}
            pros="%"
            info={`Pay back the loan shark before we get our legs broken.`}
          />

          <RoadmapItem
            align={"right"}
            img={"https://ammedodi.sirv.com/Images/doyle.png"}
            title={"20"}
            pros="%"
            info={`Drop the Character NFTs. Airdrop 10 to random Poster holders.`}
          />

          <RoadmapItem
            align={"left"}
            img={"https://ammedodi.sirv.com/Images/ED.png"}
            title={"40"}
            pros="%"
            info={`2 billboards in major cities will be rented to promote Flinch. Holders vote on where.`}
          />

          <RoadmapItem
            align={"right"}
            img={"https://ammedodi.sirv.com/Images/fire.png"}
            title={"60"}
            pros="%"
            info={`Distribute $20k worth of ETH via airdrop to 10 random Flinch holders.
            `}
          />

          <RoadmapItem
            align={"left"}
            img={"https://ammedodi.sirv.com/Images/fish.png"}
            title={"80"}
            pros="%"
            info={`
            Establish three funds. One for marketing, one for development, one for buying back the least expensive Flinch  NFTs. Each fund will be allocated 10% from profits.`}
          />

          <RoadmapItem
            align={"right"}
            img={"https://ammedodi.sirv.com/Images/gloria.png"}
            title={"100"}
            pros="%"
            info={`
            Begin making the second film. Once that film is released, new Poster and Cinematics will drop along with the film. All current holders will be airdropped companion NFTs for part two.`}
          />

          <RoadmapItem
            align={"left"}
            img={"https://ammedodi.sirv.com/Images/neonjesus.png"}
            title={"Post Launch"}
            pros=""
            info={`
            How epic a crime franchise can we build? The Metaverse is the limit. Cinema income will be paid out to members monthly from the top of launch. Airdrops might be paid via layer 2 or via NFT re-purchase until layer 2 workflow is established. Virtual cinemas will be built in the Metaverse that you and your friends can attend together.`}
          />
        </div>
      </Wrapper>
    </Fragment>
  );
};

export default Roadmap;

const Wrapper = styled.div`
  width: 100%;
  color: #fff;
  position: relative;

  background-color: #191919;

  overflow: hidden;

  border-top: 2px solid #eaa721;
  border-bottom: 2px solid #eaa721;

  padding: 20px;

  .header {
    position: relative;
    text-align: center;
    font-family: interstate, sans-serif;
    font-weight: 900;
    font-style: normal;
    font-size: 2rem;
    color: #eaa721;
    padding-bottom: 30px;
    z-index: 1;
  }
  .line-wrapper {
    position: absolute;
    left: 0;
    right: 0;
    margin: auto;
    width: 100%;
    height: 100%;

    //
    @media only screen and (max-width: 810px) {
      width: 500px;
      margin: 0 auto;
    }
    @media only screen and (max-width: 580px) {
      width: 100%;
    }
    //
  }
  .roadmap-line {
    width: 5px;
    border-radius: 20px;
    background-color: #eaa721;

    height: 100%;

    //
    height: 5050px;

    //
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    //
    @media only screen and (max-width: 810px) {
      left: 91px;
    }
    @media only screen and (max-width: 580px) {
      left: 130px;
    }
    //
  }
  .items {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 100px;
  }
`;
