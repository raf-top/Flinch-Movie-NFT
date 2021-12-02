// Styled Components
import styled from "styled-components";

// Components
import Nav from "../Global/Nav/Nav";
import PleaseSignInInfo from "./PleaseSignInInfo/PleaseSignInInfo";
import PleaseSignInPay from "./PleaseSignInPay/PleaseSignInPay";
import Footer from "../Global/Footer/Footer";

const PleaseSignIn = (props) => {
  return (
    <Wrapper>
      <Nav />
      <PleaseSignInInfo />
      <PleaseSignInPay />
      <Footer />
    </Wrapper>
  );
};

export default PleaseSignIn;

const Wrapper = styled.div``;
