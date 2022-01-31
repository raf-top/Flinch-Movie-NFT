// Styled Components
import styled from "styled-components";

// Components
import InfoTwoItem from "./InfoTwoItem/InfoTwoItem";
import Background from "../../Global/Background/Background";

const InfoTwo = () => {
  return (
    <Wrapper>
      {/* <Background/> */}
      <div className="back">
        <div className="text-center">
          <img
            className="width-50"
            src="images/flinch_logo.png"
          />
        </div>

        <p className="info-header">SPECS</p>

        <div className="content">
          <div className="sub-wrap">
            <p className="intro">
              All Flinch NFT holders have access to members only areas, virtual
              and in person premieres, afterparties,
              <br />
              collaborations with the filmmakers, value from the cinema and
              airdrops.
            </p>                                
          </div>

          <div className="sub-wrap">
            <InfoTwoItem
              header={"Crooked Cops Criminals Femme Fatales"}
              info_1={
                "All Character holders will enjoy ownership over their character in the Metaverse and in future games. Some of the characters appear in part 1 of the movie franchise. Others will appear in future films and games. In addition to standard membership perks, Flinch Character holders will have voting rights over various creative decisions about the story line of the Flinch universe."
              }
              info_2={
                "The more characters you own, the more say you have in development. Character holders will also receive free merch and invites to in person movie premieres, screenings and after parties. Poster holders get first dib on Character NFT mint.  Drops once 20% of Posters are minted."
              }
              info_3={
                "There are 9999 Crooked Cops, Criminals and Femme Fatales waiting to be unleashed onto the blockchain. Some characters appear in part 1 of the Flinch franchise. Others will appear in future films, spinoffs and games. Mint will commence once our whitelist hits 5555."
              }
              item_1_header={""}
              item_2_header={""}
              item_3_header={""}
              item_1_img={"images/doyle.png"}
              item_2_img={"images/mia.png"}
              item_3_img={"images/james.png"}
            />
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default InfoTwo;

const Wrapper = styled.div`
  padding: 0px;
  padding-top: 82.25px;

  @media only screen and (max-width: 1015px) {
    padding-top: 73.33px;
  }

  //
  width: 100%;
  @media only screen and (max-width: 1350px) {
    width: 100%;
  }
  //
  margin: 0 auto;

  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 30px;

  .width-50 {
    width: auto;
    @media only screen and (max-width: 650px) {
      width: 60vw;
    }
  }

  .sub-wrap {
    padding: 0 130px;
    width: 100%;
    @media only screen and (max-width: 825px) {
      padding: 0 20px;
    }
  }

  .info-header {
    font-family: interstate, sans-serif;
    font-weight: 900;
    font-style: normal;
    font-size: 2rem;
    color: #e02d41;
    z-index: 2;
    position: relative;
    padding: 20px 70px 0px 70px;
    text-align: center;
  }

  .back {
    background: black
      url(images/flinch-background.png) top left fixed;

    padding: 0px;
  }

  .text-center {
    margin: 40px auto;
    text-align: center;
  }
  .text-center-middle {
    text-align: center;
    @media only screen and (max-width: 825px) {
      text-align: left;
    }
  }
  .content {
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 10px;
    padding: 0px;
    .intro {
      color: #fff;
      font-size: 1.1rem;
      text-align: center;
      line-height: 31px;
      font-family: acumin-pro-wide, sans-serif;
      @media only screen and (max-width: 825px) {
        text-align: left;
      }
    }

    .info {
      color: #fff;
      font-size: 1.1rem;
      line-height: 31px;
      font-family: acumin-pro-wide, sans-serif;
      @media only screen and (max-width: 750px) {
        text-align: left;
      }
    }
  }
`;
