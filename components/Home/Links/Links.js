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
        <p className="header">The Links</p>

        <p className="info">
          Get your Flinch merch today. 100 free NFT download cards randomly sent with merchandise to customers. Merch profits reward Flinch NFT holders.
        </p>

        <div className="links">        
          <Link href="https:flinchthemovie.com/product/flinch-vhs">
            <img src="https://andymanh.sirv.com/VHS%20cassette%20approved.jpg" width="250px" />
          </Link>
          <Link href="https:flinchthemovie.com/product/flinch-vinyl">
            <img src="https://andymanh.sirv.com/vinyl-record%2011%201%2021.jpg" width="250px" />
          </Link>
          <Link href="https:flinchthemovie.com/product/flinch-cassette">
            <img src="https://andymanh.sirv.com/Yellow%20Cassette%20case%20%26%20tape%20approved.jpg" width="250px" />
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
        &:hover {
          cursor: pointer
        }
      }

      
    }    
  }
`;
