// React
import { useEffect, useState } from "react";

// Styled Components
import styled from "styled-components";

// Material UI
// import Button from "@mui/material/Button";
// import ButtonGroup from "@mui/material/ButtonGroup";
// import InstagramIcon from "@mui/icons-material/Instagram";
// import FacebookIcon from "@mui/icons-material/Facebook";
// import TwitterIcon from "@mui/icons-material/Twitter";

// import Background from "../../Global/Background/Background";
// import MintBackground from "./MintBackground/MintBackground";

const Mint = () => {
  const [amountToMint, setAmountToMint] = useState(1);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const decreaseQuantity = () => {
    if (amountToMint > 1) {
      setAmountToMint((prev) => prev - 1);
    }
  };

  const increaseQuantity = () => {
    if (amountToMint < 10) {
      setAmountToMint((prev) => prev + 1);
    }
  };

  return (
    <Wrapper id="mint">
      {/* {mounted && window.screen.width < 500 && (
        <video autoPlay loop playsInline className="video" muted>
          <source
            src="https://cdn.discordapp.com/attachments/771433993744678972/910551401208381550/Noman_square_2_Trim.mp4"
            type="video/mp4"
          />
        </video>
      )}

      {mounted && window.screen.width >= 500 && (
        <video autoPlay loop muted className="video">
          <source
            src="https://cdn.discordapp.com/attachments/771433993744678972/910552371363463208/1920x1080_Red_Room_Doyle_Trim.mp4"
            type="video/mp4"
          />
        </video>
      )} */}

      {/* <MintBackground variant={"mint"} /> */}

      <div className="background">
        <img
          src="https://www.flinchthemovie.com/wp-content/uploads/2020/12/flinch-background.jpg"
          alt=""
        />
      </div>

      <img
        className="poster"
        src="https://ammedodi.sirv.com/Images/Revised%20Poster_RemovedText.png"
        alt=""
      />

      {/* <div className="mint">
        <ButtonGroup size="small" className="amount-wrapper">
          <Button className="decrease" onClick={decreaseQuantity}>
            -
          </Button>

          <Button className="quantity" disabled>
            {amountToMint}
          </Button>

          <Button className="increase" onClick={increaseQuantity}>
            +
          </Button>
        </ButtonGroup>

        <Button variant="contained" className="button">
          MINT
        </Button>
      </div>

      <div className="socials">
        <a
          href="https://www.instagram.com/ardorpictures/"
          target="_blank"
          rel="noreferrer"
        >
          <InstagramIcon className="icon" />
        </a>
        <a
          href="https://www.facebook.com/ardorpictures"
          target="_blank"
          rel="noreferrer"
        >
          <FacebookIcon className="icon" />
        </a>
        <a href="https://discord.gg/wKWpHDZM" target="_blank" rel="noreferrer">
          <img
            src="https://ammedodi.sirv.com/Images/discord-icon.svg"
            alt=""
            className="icon"
          />
        </a>
        <a
          href="https://twitter.com/ArdorPictures"
          target="_blank"
          rel="noreferrer"
        >
          <TwitterIcon className="icon" />
        </a>
      </div> */}
    </Wrapper>
  );
};

export default Mint;

const Wrapper = styled.div`
  padding: 0 20px;

  //border-top: 2px solid #eaa721;
  border-bottom: 2px solid #eaa721;

  position: relative;

  overflow: hidden;

  //

  // height: 100%;

  overflow: hidden;

  //background-color: blue;

  .poster {
    // position: absolute;
    top: 0;
    left: 0;

    width: 100vw;

    max-height: calc(100vh - 80px);

    z-index: -1;
  }

  .background {
    img {
      position: fixed;
      //   left: 50%;
      //    transform: translateX(-50%);

      //   top: -90%;

      left: 0;

      height: calc(100vh - 80px);
      min-height: calc(100vh - 80px);

      top: 0px;
      //
      top: 80px;
      @media only screen and (max-width: 1000px) {
        top: 70px;
      }
      //

      z-index: -1;

      //  margin-top: 80px;
      //
      width: 100vw;
      @media only screen and (max-width: 1000px) {
        width: 100vw;

        height: 100%;
        min-height: 100%;
      }
      //

      // max-height: 100vh;
    }
  }

  //
  margin-top: 80px;
  @media only screen and (max-width: 1000px) {
    margin-top: 74px;
  }
  //

  width: 100%;
  //
  //height: 800px;
  @media only screen and (max-width: 1100px) {
    //   height: 600px;
  }
  @media only screen and (max-width: 800px) {
    //   height: 500px;
  }
  @media only screen and (max-width: 550px) {
    //  height: 400px;
  }
  //

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  .mint {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    animation: fade-scale 2s;
    position: relative;

    //
    gap: 20px;
    @media only screen and (max-width: 475px) {
      // gap: 10px;
    }
    //

    .amount-wrapper {
      width: 300px;
      border-radius: 0px;
      .increase {
        border-radius: 0px;
        font-size: 30px;
        width: 101px;
        color: #fff;
        border: none;
        outline: none;

        background-color: #eaa721;
        &:hover {
          background-color: #eaa721;
        }
      }
      .decrease {
        border-radius: 0px;
        font-size: 30px;
        width: 101px;
        color: #fff;
        border: none;
        outline: none;

        background-color: #eaa721;
        &:hover {
          background-color: #eaa721;
        }
      }
      .quantity {
        border-radius: 0px;
        font-size: 30px;
        color: #fff;
        width: 101px;
        border: none;
        background-color: #eaa721;
      }
    }
    .button {
      border-radius: 0px;
      background-color: #eaa721;
      width: 300px;
      padding: 15px;
      font-family: "interstate", sans-serif;
      font-weight: 700;
      font-style: normal;
      font-size: 1.4rem;
      &:hover {
        background-color: #eaa721;
      }
    }
  }

  .socials {
    display: flex;
    align-items: center;
    justify-content: space-between;

    width: 300px;

    animation: fade-scale 2s;

    //
    padding-top: 50px;
    @media only screen and (max-width: 475px) {
      //  padding-top: 10px;
    }
    //

    z-index: 1;

    a {
      .icon {
        fill: #eaa721;
        width: 50px;
        font-size: 50px;
      }
    }
  }

  .video {
    width: 100%;
    height: 100%;

    position: absolute;
    top: 0;
    left: 0;

    z-index: -1;
  }

  @keyframes fade-scale {
    0% {
      opacity: 0;
      transform: scale(0.75);
    }

    100% {
      opacity: 1;
      transform: scale(1);
    }
  }
`;
