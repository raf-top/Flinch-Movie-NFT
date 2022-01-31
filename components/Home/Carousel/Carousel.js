// Styled Components
import styled from "styled-components";

// Material UI
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";

// React Slick
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Carousel = () => {
  // Slider Settings
  const settings = {
    dots: false,
    infinite: true,
    speed: 750,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    pauseOnHover: false,
    swipe: true,
    arrows: false,
    autoplaySpeed: 1500,
    customPaging: () => <FiberManualRecordIcon />,
    responsive: [
      {
        breakpoint: 1300,
        settings: {
          slidesToShow: 5,
        },
      },
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };

  return (
    <Wrapper {...settings}>
      <div className="slide-1">
        <img
          src="images/doyle.png"
          alt=""
        />
      </div>
      <div className="slide-2">
        <img
          src="images/mia.png"
          alt=""
        />
      </div>
      <div className="slide-3">
        <img
          src="images/james.png"
          alt=""
        />
      </div>
      <div className="slide-4">
        <img
          src="images/lee.png"
          alt=""
        />
      </div>
      <div className="slide-5">
        <img
          src="images/gloria.png"
          alt=""
        />
      </div>
      <div className="slide-6">
        <img
          src="images/doyle.png"
          alt=""
        />
      </div>
      <div className="slide-7">
        <img
          src="images/mia.png"
          alt=""
        />
      </div>
      <div className="slide-8">
        <img
          src="images/james.png"
          alt=""
        />
      </div>
      <div className="slide-9">
        <img
          src="images/lee.png"
          alt=""
        />
      </div>
      <div className="slide-10">
        <img
          src="images/gloria.png"
          alt=""
        />
      </div>
    </Wrapper>
  );
};

export default Carousel;

const Wrapper = styled(Slider)`
  margin: 100px 0;

  div {
    img {
      width: 100%;
    }
  }
  .slick-slide div {
    outline: none;
    border: 2px solid transparent;
  }
`;
