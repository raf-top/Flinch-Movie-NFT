// Styled Components
import styled from "styled-components";

// Components


const Cinema = () => {
  return (
    <Wrapper>
      {/* <Background /> */}
   

      <div className="content">
        <h1>Welcome to the Cinema</h1>

        <iframe
          src="https://player.vimeo.com/video/649157389?h=b5a8c5a428&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
          id="iframe-embed"
          width="100%"
          height="500px"
          scrolling="no"
          frameBorder="0"
          allowFullScreen="true"
          webkitallowfullscreen="true"
          mozallowfullscreen="true"
        ></iframe>
      </div>

    
    </Wrapper>
  );
};

export default Cinema;

const Wrapper = styled.div`
  .content {
    padding: 0 20px;

    //
    margin-top: 150px;
    @media only screen and (max-width: 700px) {
      margin-top: 90px;
    }
    //

    display: flex;
    flex-direction: column;
    gap: 20px;
    justify-content: center;
    align-items: center;

    h1 {
      color: #eaa721;
      font-size: 50px;

      text-align: center;
    }

    iframe {
      //
      width: 100vw;
      height: 100vh;
      @media only screen and (max-width: 1200px) {
        height: 600px;
        width: 100%;
      }

      @media only screen and (max-width: 800px) {
        height: 400px;
        width: 100%;
      }

      @media only screen and (max-width: 600px) {
        height: 300px;
        width: 100%;
      }

      @media only screen and (max-width: 450px) {
        height: 200px;
        width: 100%;
      }
      //
    }
  }
`;
