// React
import { useState } from "react";

// Styled Components
import styled from "styled-components";

// Redux
import { useDispatch } from "react-redux";
import { userAcitons } from "../../../store/user-slice";
import { useSelector } from "react-redux";

// Clipboard
import { CopyToClipboard } from "react-copy-to-clipboard";

// Material UI
import Button from "@mui/material/Button";

const PleaseSignInInfo = () => {
  const [movieLink, setMovieLink] = useState("https://youtu.be/2_FiedC-bVE");

  const userAddress = useSelector((state) => state.user.userAddress);
  const isWhitelisted = useSelector((state) => state.user.isWhitelisted);
  const isCustomer = useSelector((state) => state.user.isCustomer);

  return (
    <Wrapper>
      <div className="video">
        <p className="info-2">
        Connect your wallet to watch the movie.<br/> Pay 2 Matic tokens to watch the film and be entered into our whitelist for first access to the NFT mint.<br/>        
        </p>

        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/2_FiedC-bVE"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="iframe"
        ></iframe>
        <p className="info-2">          
          5 NFTs will be dropped to random Cinema users throughout the mint. Once you&#39;ve watched the film you&#39;re entered to win.
        </p>
        <CopyToClipboard text={movieLink}>
          <Button className="copy-button">click to copy sharable link</Button>
        </CopyToClipboard>
      </div>
      {/* <p className="info-1">
        Members receive 20% of all income from the cinema
      </p> */}
    </Wrapper>
  );
};

export default PleaseSignInInfo;

const Wrapper = styled.div`
  padding: 0 20px;
  padding-bottom: 60px !important;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 50px;

  //
  margin-top: 150px;
  @media only screen and (max-width: 700px) {
    margin-top: 90px;
  }

  //

  .info-1 {
    font-family: interstate, sans-serif;
    font-weight: 900;
    font-style: normal;
    font-size: 1.5rem;
    color: #eaa721;

    text-align: center;
  }

  .info-2 {
    font-family: interstate, sans-serif;
    font-weight: 900;
    font-style: normal;
    font-size: 1.2rem;
    color: #fff;
    margin-bottom: 20px;
    text-align: center;
  }

  .video {
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
  }

  .copy-button {
    border: 2px solid #eaa721;
    color: #eaa721;
    font-size: 1.35rem;
    border-radius: 0px;
    text-transform: uppercase;

    width: 100%;
    @media only screen and (max-width: 600px) {
    }

    &:hover {
      color: rgba(234, 167, 33, 0.9);
    }

    display: none;
  }
`;
