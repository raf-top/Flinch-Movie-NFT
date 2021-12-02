// Styled Components
import styled from "styled-components";

// Material UI
import Button from "@mui/material/Button";

const InfoThree = () => {
  return (
    <Wrapper>
      <p className="header">
        Think of the first film as a pilot. A starting point for us to build an
        epic crime movie franchise together
      </p>

      <div className="info">
        <p className="alert">
          Enter your email for a chance at free merch and one of the 20
          NFT&apos;s we will airdrop to random early supporters.
        </p>

        <div className="form">
          <input type="email" className="input" placeholder="Email" />
          <Button className="button">SUBMIT</Button>
        </div>
      </div>
    </Wrapper>
  );
};

export default InfoThree;

const Wrapper = styled.div`
  //
  width: 800px;
  @media only screen and (max-width: 850px) {
    width: 100%;
  }
  //

  padding: 0 20px;
  padding-top: 100px;

  margin: 0 auto;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 20px;

  .header {
    font-family: interstate, sans-serif;
    font-weight: 900;
    font-style: normal;
    font-size: 2rem;
    color: #eaa721;

    text-align: center;
  }

  .info {
    //
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 20px;
    @media only screen and (max-width: 865px) {
      flex-direction: column;
    }
    //

    padding-top: 20px;

    .alert {
      color: red;
      font-size: 1.2rem;
      line-height: 31px;
      font-family: acumin-pro-wide, sans-serif;

      @media only screen and (max-width: 865px) {
        width: 100%;
      }
    }

    .form {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      gap: 20px;

      .input {
        background-color: #191919;
        color: #fff;
        border: none;
        outline: none;
        padding: 10px;
        width: 300px;
        font-size: 1.1rem;
        border-radius: 0px;

        border: 2px solid #eaa721;
        height: 52.5px;
      }

      .button {
        border: 2px solid #eaa721;
        width: 175px;
        color: #eaa721;
        font-size: 1.35rem;
        border-radius: 0px;
        text-transform: uppercase;

        &:hover {
          color: rgba(234, 167, 33, 0.9);
        }
      }
    }
  }
`;
