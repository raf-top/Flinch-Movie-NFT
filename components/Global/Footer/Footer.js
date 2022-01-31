// Styled Components
import styled from "styled-components";

// Material UI
import Button from "@mui/material/Button";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";

const Footer = () => {
  return (
    <Wrapper>
      {/* <div className="form">
        <input type="email" className="input" placeholder="Email" />
        <Button className="button">SUBMIT</Button>
      </div> */}

      <div className="copyright">
        {/* <img
          src="https://media.discordapp.net/attachments/903747551688294461/913107897095958619/Ardor_Logo_White.png?width=600&height=600"
          alt=""
          className="logo"
        /> */}

        <p>Copyright © Ardor Pictures 2021</p>
      </div>

      <div className="socials">
        <a
          href=" https://www.instagram.com/flinchmovie/"
          target="_blank"
          rel="noreferrer"
        >
          <InstagramIcon className="icon" />
        </a>
        <a
          href=" https://www.facebook.com/flinchmovie"
          target="_blank"
          rel="noreferrer"
        >
          <FacebookIcon className="icon" />
        </a>
        <a
          href="https://discord.gg/VKB4xMQdG8"
          target="_blank"
          rel="noreferrer"
        >
          <img
            src="images/discord-icon.svg"
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
      </div>
    </Wrapper>
  );
};

export default Footer;

const Wrapper = styled.footer`
  padding: 20px;

  background-color: #191919;

  // height: 75px;

  border-top: 2px solid #eaa721;

  position: relative;

  width: 100%;

  //
  display: flex;
  flex-direction: column;
  gap: 20px;
  justify-content: space-between;
  align-items: center;
  @media only screen and (max-width: 1000px) {
    flex-direction: column;
    gap: 20px;
  }
  //

  text-align: center;

  .form {
    //
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 20px;
    @media only screen and (max-width: 1000px) {
      flex-direction: column;
    }
    //

    width: 400px;

    .input {
      background-color: #191919;
      color: #fff;
      border: none;
      outline: none;
      padding: 10px;

      font-size: 1.1rem;
      border-radius: 0px;

      border: 2px solid #eaa721;

      height: 52.5px;
    }

    .button {
      border: 2px solid #eaa721;
      width: 50%;
      color: #eaa721;
      font-size: 1.35rem;
      border-radius: 0px;
      text-transform: uppercase;

      height: 52.5px;

      &:hover {
        color: rgba(234, 167, 33, 0.9);
      }
    }
  }

  .copyright {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 20px;

    img {
      width: 200px;
    }

    p {
      color: #eaa721;
      font-size: 1.1rem;
    }
  }

  .socials {
    display: flex;
    align-items: center;
    justify-content: space-between;

    width: 300px;

    a {
      .icon {
        fill: #e02d41;
        width: 50px;
        font-size: 50px;
      }
    }
  }
`;
