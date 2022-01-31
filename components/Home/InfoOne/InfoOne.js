// Styled Components
import styled from "styled-components";

// Material UI
import Button from "@mui/material/Button";

const joinDiscord = () => {
  window.open('https://discord.gg/VKB4xMQdG8', '_blank');
}
const InfoOne = () => {
  return (
    <Wrapper id="story">
      <div className="content">
        <div className="text">
          <p className="header">Cinema On The Blockchain.</p>
          <p className="info-1">
            Our mission is to revolutionize cinema. How?
            Utilize NFT&apos;s to give fans governance, rewards and ownership over a movie franchise. 
            The Flinch NFT&apos;s are a collection of 15,000 unique NFTs - digital collectables from the 
            motion picture Flinch, that live on the Ethereum blockchain. 
            <br/><br/>
            As the franchise unfolds, your NFT doubles as your proof of membership - granting you access to 
            and rewards from the Cinema, giving you say in the development of subsequent films and games, 
            invites to premieres and parties, regular airdrops of future NFT&apos;s and the rewards generated 
            by ancillary merchandise, games and spinoffs.
          </p>
          <div className="text-center">
            <Button className="connect-button" onClick={joinDiscord}>
              Join our Discord
            </Button>
          </div>
        </div>

        <img
          src="images/characters.gif"
          alt=""
          className="video"
        />
      </div>
    </Wrapper>
  );
};

export default InfoOne;

const Wrapper = styled.div`
  width: 100%;
  height: 100%;

  position: relative;
  overflow: hidden;
  background-color: #191919;

  border-bottom: 2px solid #eaa721;
  .text-center {
    text-align: center;
  }
  .connect-button {
    border: 2px solid #5ec2a3;
    width: 300px;
    color: #eaa721;
    font-size: 1.25rem;
    border-radius: 0px;
    text-transform: uppercase;

    &:hover {
      color: rgba(234, 167, 33, 0.9);
    }
  }

  .content {
    width: 100%;
    padding: 50px 20px;

    //
    width: 1300px;
    @media only screen and (max-width: 1350px) {
      width: 100%;
    }
    //
    margin: 0 auto;

    //
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    gap: 50px;
    @media only screen and (max-width: 1075px) {
      flex-direction: column;
      gap: 50px;
    }
    //

    .text {
      display: flex;
      flex-direction: column;
      gap: 30px;

      overflow: hidden;

      position: relative;

      .header {
        font-family: interstate, sans-serif;
        font-weight: 900;
        font-style: normal;
        font-size: 2rem;
        color: #eaa721;
      }

      .info {
        &-1 {
          color: #fff;
          font-size: 1.1rem;

          line-height: 31px;
          font-family: acumin-pro-wide, sans-serif;
        }

        &-2 {
          color: #fff;
          font-size: 1.1rem;

          line-height: 31px;
          font-family: acumin-pro-wide, sans-serif;
        }
      }
    }

    .video {
      width: 400px;

      //
      width: 520px;
      @media only screen and (max-width: 550px) {
        width: 100%;
      }
      //
    }

    position: relative;
    overflow: hidden;
  }
`;
