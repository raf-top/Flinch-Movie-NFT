// Styled Components
import styled from "styled-components";

const InfoTwoItem = (props) => {
  return (
    <Wrapper itemsSpaceEvenly={props.space_evenly}>
      <p className="header">{props.header}</p>

      <div className="content">
        <div className="info">
          <p>{props.info_1}</p>
        </div>

        <div className="items">
          {props.item_1_video === true ? (
            <div className="item">
              <p className="info font-blue">{props.item_1_header}</p>
              <video
                autoPlay={true}
                loop={true}
                playsInline={true}
                className="img"
                muted
              >
                <source
                  src={props.item_1_video_src}
                  type="video/mp4"
                  className="img"
                />
              </video>
            </div>
          ) : (
            <div className="item">
              <p className="info font-blue">{props.item_1_header}</p>
              <img src={props.item_1_img} alt="" className="img" />
            </div>
          )}

          {props.item_2_video === true ? (
            <div className="item">
              <p className="info font-blue">{props.item_2_header}</p>
              <video
                autoPlay={true}
                loop={true}
                playsInline={true}
                className="img"
                muted
              >
                <source
                  src={props.item_2_video_src}
                  type="video/mp4"
                  className="img"
                />
              </video>
            </div>
          ) : (
            <div className="item">
              <p className="info font-blue">{props.item_2_header}</p>
              <img src={props.item_2_img} alt="" className="img" />
            </div>
          )}

          {props.item_3_img.length > 0 && (
            <div className="item">
              <p className="info font-blue">{props.item_3_header}</p>
              <img src={props.item_3_img} alt="" className="img" />
            </div>
          )}
        </div>
      </div>
    </Wrapper>
  );
};

export default InfoTwoItem;

const Wrapper = styled.div`
  padding-top: 75px;

  .header {
    font-family: interstate, sans-serif;
    font-weight: 900;
    font-style: normal;
    font-size: 1.5rem;
    color: #eaa721;
    text-align: center;
  }

  .content {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    gap: 20px;

    .info {
      display: flex;
      flex-direction: column;
      gap: 10px;

      color: #fff;
      font-size: 1.2rem;

      line-height: 31px;
      font-family: acumin-pro-wide, sans-serif;
    }
    .font-blue {
      color: #5ec2a3 !important;
    }
  }

  .items {
    width: 100%;
    padding-bottom: 60px;
    //
    display: flex;
    justify-content: ${(props) =>
      props.itemsSpaceEvenly ? "space-evenly" : "space-between"};
    align-items: center;
    flex-wrap: wrap;
    @media only screen and (max-width: 1300px) {
      justify-content: center;
      gap: 50px;
    }
    //

    .item {
      .info {
        color: #fff;
        font-size: 1.2rem;

        line-height: 31px;
        font-family: acumin-pro-wide, sans-serif;
        text-align: center;
        padding-bottom: 10px;
        padding-top: 20px;
      }

      .img {
        width: 300px;
        height: 300px;
        transition: all 0.7s;

        border: solid 0px transparent;

        &:hover {
          transform: scale(1.05);
        }
      }
    }
  }
`;
