// Styled Components
import styled from "styled-components";

// Components
import PleaseSignInInfo from "./PleaseSignInInfo/PleaseSignInInfo";
import PleaseSignInPay from "./PleaseSignInPay/PleaseSignInPay";

const PleaseSignIn = (props) => {
  return (
    <Wrapper>
  
      <PleaseSignInInfo />
      <PleaseSignInPay />
  
    </Wrapper>
  );
};

export default PleaseSignIn;

const Wrapper = styled.div``;
