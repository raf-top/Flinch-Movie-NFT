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
        <img src="https://ammedodi.sirv.com/Images/James.jpeg" alt="" />
      </div>
      <div className="slide-2">
        <img src="https://ammedodi.sirv.com/Images/Doyle.jpeg" alt="" />
      </div>
      <div className="slide-3">
        <img src="https://ammedodi.sirv.com/Images/Lee.jpeg" alt="" />
      </div>
      <div className="slide-4">
        <img src="https://ammedodi.sirv.com/Images/Gloria.jpeg" alt="" />
      </div>
      <div className="slide-5">
        <img src="https://ammedodi.sirv.com/Images/Mia.jpeg" alt="" />
      </div>{" "}
      <div className="slide-6">
        <img src="https://ammedodi.sirv.com/Images/Lee.jpeg" alt="" />
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
