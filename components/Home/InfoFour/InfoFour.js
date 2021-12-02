// React
import { useRef, useState } from "react";

// Next
import Link from "next/link";

// Clipboard
import { CopyToClipboard } from "react-copy-to-clipboard";

// Material UI
import Button from "@mui/material/Button";

// Styled Components
import styled from "styled-components";

// Components
import Background from "../../Global/Background/Background";

const InfoFour = () => {
  const [movieLink, setMovieLink] = useState("https://youtu.be/72N7Uq6wAQ0");

  return (
    <Wrapper>

      <div className="content">
        <p className="header">The Cinema</p>

        <p className="info">
          Unlike other NFT projects, making the films is not a future goal, part
          one is complete. What happens next is up to you. To access the cinema
          for free and watch the film, Flinch NFT holders will need to be signed
          in to their Metamask wallet. Non Flinch holders can watch Flinch in
          our cinema for $1 USD worth of various coins. 
          Flinch holders will be rewarded value from the cinema via monthly airdrops, in our token of choice.
        </p>

        <div className="cinema">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/72N7Uq6wAQ0"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="iframe"
          ></iframe>

          <Link href="/cinema">
            <Button className="copy-button">Visit the Cinema</Button>
          </Link>
        </div>
      </div>
    </Wrapper>
  );
};

export default InfoFour;

const Wrapper = styled.div`
  width: 100%;
  height: 100%;

  position: relative;
  overflow: hidden;
  background: #191919;
  border-top: 2px solid #eaa721;
  border-bottom: 2px solid #eaa721;

  .content {
    width: 100%;
    padding: 50px 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 30px;

    // background-color: blue;

    overflow: hidden;

    position: relative;

    //
    width: 1300px;
    @media only screen and (max-width: 1350px) {
      width: 100%;
    }
    //
    margin: 0 auto;

    .header {
      text-align: center;
      font-family: interstate, sans-serif;
      font-weight: 900;
      font-style: normal;
      font-size: 2rem;
      color: #eaa721;
    }

    .info {
      color: #fff;
      font-size: 1.2rem;
      line-height: 31px;
    }

    .cinema {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      gap: 20px;

      .iframe {
        //
        width: 800px;
        height: 500px;
        @media only screen and (max-width: 850px) {
          width: 90vw;
          height: 300px;
        }
        //

        border: 2px solid #eaa721;
      }

      .copy-wrap {
        width: 300px;
        height: 40px;
        background-color: #eaa721;
        cursor: pointer;

        display: flex;
        justify-content: center;
        align-items: center;

        p {
          color: #fff;
          font-size: 1.2rem;
          line-height: 31px;

          text-transform: uppercase;
        }
      }
    }

    .copy-button {
      border: 2px solid #eaa721;
      width: 275px;
      color: #eaa721;
      font-size: 1.35rem;
      border-radius: 0px;
      text-transform: uppercase;

      &:hover {
        color: rgba(234, 167, 33, 0.9);
      }
    }
  }
`;
