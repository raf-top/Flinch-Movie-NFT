// Styled Components
import styled from "styled-components";

// Components
import InfoTwoItem from "./InfoTwoItem/InfoTwoItem";

const InfoTwo = () => {
  return (
    <Wrapper>
      <img
        src="https://ammedodi.sirv.com/Images/flinch-movie-logo-300x107.png"
        alt=""
        className="logo"
      />

      <div className="content">
        <p className="info-header">Specs</p>

        <div className="content">
          <p className="intro">
            All Flinch NFT holders have access to members only areas, virtual
            premieres, collaborations with the filmmakers, revenue from the
            cinema and airdrops. Fanvestors will also get a &quot;kit&quot;
            complete with social ready assets to spread the word.
          </p>

          <p className="info">
            There are 3 types of Flinch collectibles, each with fair launch and
            distribution, some rarer than others. They are:
          </p>

          <InfoTwoItem
            header={"POSTERS:"}
            info_1={
              "All Poster holders receive standard access to all member perks, airdrops and income stream from our cinema. Poster skews are 1/300 and mint for 0.03 ETH. There are 3 skews:"
            }
            info_2={""}
            item_1_header={"90s Noir"}
            item_2_header={"Noir"}
            item_3_header={"Neo Noir"}
            item_1_img={"https://ammedodi.sirv.com/Images/fish-gif.gif"}
            item_2_img={"https://ammedodi.sirv.com/Images/gunshot-gif.gif"}
            item_3_img={"https://ammedodi.sirv.com/Images/airbrush-gif.gif"}
          />

          <InfoTwoItem
            header={"CHARACTERS:"}
            info_1={
              "All Character holders will enjoy ownership over their character in the Metaverse and in future games. Some of the characters appear in part 1 of the movie franchise. Others will appear in future films and games. In addition to standard membership perks, Flinch Character holders will have voting rights over various creative decisions about the story line of the Flinch universe.  The more characters you own, the more say you have in development. Character holders will also receive free merch and invites to in person movie premieres, screenings and after parties. There are two Character skews:"
            }
            info_2={
              "Characters are 1/1000 and mint for 0.08 ETH .  Drops once 20% of Posters are minted."
            }
            item_1_header={""}
            item_2_header={""}
            item_3_header={""}
            item_1_img={
              "https://ammedodi.sirv.com/Images/Doyle.jpeg"
            }
            item_2_img={
              "https://ammedodi.sirv.com/Images/Mia.jpeg"
            }
            item_3_img={
              "https://ammedodi.sirv.com/Images/James.jpeg"
            }
          />

          {/* <InfoTwoItem
            header={"CINEMATICS:"}
            info_1={
              "All Flinch Cinematic holders will enjoy the standard perks of ownership along with voting rights regarding subsequent films, access to their cinematic items in the Metaverse and free merch. Cinematics are not just visual, they also include original score composed by synth-wave God Miami Nights 1984. Each Cinematic is a 1/500 and mints for 0.05 ETH. Drops on Nov 20. There are 2 skews."
            }
            info_2={""}
            item_1_header={"Crown Vic"}
            item_2_header={"Doyle's Room"}
            item_3_header={""}
            item_1_img={
              "https://ammedodi.sirv.com/Images/Flinch%20Square-Norman%20LOOP.gif"
            }
            item_1_video={true}
            item_2_video={true}
            item_1_video_src={"https://i.imgur.com/NdabAxv.mp4"}
            item_2_video_src={"https://i.imgur.com/J97MTpO.mp4"}
            item_2_img={"https://i.imgur.com/J97MTpO.mp4"}
            item_3_img={""}
            space_evenly={true}
          /> */}
        </div>
      </div>
    </Wrapper>
  );
};

export default InfoTwo;

const Wrapper = styled.div`
  padding: 0 20px;
  padding-top: 150px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 50px;

  .logo {
    //
    width: 500px;
    @media only screen and (max-width: 600px) {
      width: 100%;
    }
    //
  }

  .content {
    //
    width: 1300px;
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

    .info-header {
      font-family: interstate, sans-serif;
      font-weight: 900;
      font-style: normal;
      font-size: 2rem;
      color: #eaa721;
    }

    .content {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: flex-start;
      gap: 10px;

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
  }
`;
