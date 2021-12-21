// React
import { useRef, useState } from "react";

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
      <Background />
      <div className="content">
        <p className="header">Merchandise</p>

        <p className="info">
          100 NFTs will be airdropped to random merchandise customers. Merch
          sales reward Flinch NFT holders.
        </p>

        <div className="links">
          <a
            href="https://www.ardorpictures.com/products/flinch-vhs?variant=40302138687638"
            target="_blank"
            rel="noreferrer"
          >
            <img src="https://andymanh.sirv.com/VHS1.png" width="300px" />
          </a>
          <a
            href="https://www.ardorpictures.com/products/flinch-vinyl"
            target="_blank"
            rel="noreferrer"
          >
            <img src="https://andymanh.sirv.com/vinyl1.png" width="300px" />
          </a>
          <a
            href="https://www.ardorpictures.com/products/flinch-cassette"
            target="_blank"
            rel="noreferrer"
          >
            <img src="https://andymanh.sirv.com/cassette1.png" width="300px" />
          </a>
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
      font-size: 1.8rem;
      color: #eaa721;
    }

    .info {
      color: #fff;
      font-size: 1.1rem;
      line-height: 31px;
      text-align: center;
      max-width: 800px;
      @media only screen and (max-width: 750px) {
        text-align: left;
      }
    }

    .links {
      display: flex;
      justify-content: center;
      flex-wrap: wrap;
      gap: 25px;

      img {
        transition: all 0.7s;
        &:hover {
          transform: scale(1.05);
        }
      }
    }
  }
`;
