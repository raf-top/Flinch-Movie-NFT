// Styled Components
import styled from "styled-components";

// Components
import InfoTwoItem from "./InfoTwoItem/InfoTwoItem";
import Background from "../../Global/Background/Background";

const InfoTwo = () => {
  return (
    <Wrapper>
      
      <div className="text-center">
        <img src="https://i.postimg.cc/PfMm94FD/logo.png"/>
      </div>    
      <div className="back">
        <p className="info-header">Specs</p>

        <div className="content">
          <p className="intro">
            All Flinch NFT holders have access to members only areas, virtual
            premieres, collaborations with the filmmakers, revenue from the cinema
            and airdrops. Fanvestors will also get a &quot;kit&quot; complete with
            social ready assets to spread the word.
          </p>

          <p className="info">
            There are 2 types of Flinch collectibles, each with fair launch and
            distribution, some rarer than others. They are:
          </p>
        
      
          <InfoTwoItem        
            header={"POSTERS:"}
            info_1={
              "All Poster holders receive standard access to all member perks, airdrops and value from our cinema. Poster skews are 1/3333 and mint for 0.04 ETH. There are 3 skews:"
            }
            info_2={""}
            item_1_header={"90s Noir"}
            item_2_header={"Noir"}
            item_3_header={"Neo Noir"}
            item_1_img={"https://s10.gifyu.com/images/Fish-GIF.gif"}
            item_2_img={"https://ammedodi.sirv.com/Images/gunshot-gif.gif"}
            item_3_img={"https://s10.gifyu.com/images/Airbrush-GIF.gif"}
          />
          
          <div className="yellow-line"></div>
          <InfoTwoItem
            header={"CHARACTERS:"}
            info_1={
              "All Character holders will enjoy ownership over their character in the Metaverse and in future games. Some of the characters appear in part 1 of the movie franchise. Others will appear in future films and games. In addition to standard membership perks, Flinch Character holders will have voting rights over various creative decisions about the story line of the Flinch universe.  The more characters you own, the more say you have in development. Character holders will also receive free merch and invites to in person movie premieres, screenings and after parties."
            }
            info_2={
              "Poster holders get first dib on Character NFT mint.  Drops once 20% of Posters are minted."
            }
            item_1_header={""}
            item_2_header={""}
            item_3_header={""}
            item_1_img={
              "https://i.postimg.cc/Z9J1PDz3/Doyle.jpg"
            }
            item_2_img={
              "https://i.postimg.cc/KkHw2Gkr/Mia.jpg"
            }
            item_3_img={
              "https://i.postimg.cc/5Y0TTY02/James.jpg"
            }
          />
          
        </div>
      </div>
    </Wrapper>
  );
};

export default InfoTwo;

const Wrapper = styled.div`
  padding: 0px;
  padding-top: 150px;

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
  align-items: flex-start;
  gap: 30px;

  .yellow-line {
    border-bottom: 2px solid #eaa721;
    margin-top: 90px;
    width: 100%
  }

  .info-header {
    font-family: interstate, sans-serif;
    font-weight: 900;
    font-style: normal;
    font-size: 2rem;
    color: #eaa721;
    z-index: 2;
    position: relative; 
    padding-top: 20px;
  }

  .back {
    background: #ffffff url(https://www.flinchthemovie.com/wp-content/uploads/2020/12/flinch-background.jpg) top left fixed;
    padding: 0 23px 30px 23px;
  }
  .text-center {
    margin: 0 auto;
    text-align: center;
  }
  .content {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    gap: 10px;
    padding: 20px;
    .intro {
      color: #fff;
      font-size: 1.2rem;

      line-height: 31px;
      font-family: acumin-pro-wide, sans-serif;
    }

    .info {
      color: #fff;
      font-size: 1.2rem;

      line-height: 31px;
      font-family: acumin-pro-wide, sans-serif;
    }
  }
`;
