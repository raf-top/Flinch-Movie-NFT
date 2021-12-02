// Styled Components
import styled from "styled-components";

// Components
import Nav from "../Global/Nav/Nav";
import MembersInfo from "./MembersInfo/MembersInfo";
import Footer from "../Global/Footer/Footer";

const Members = () => {
  return (
    <Wrapper>
      <Nav />
      <MembersInfo />
      <Footer />
    </Wrapper>
  );
};

export default Members;

const Wrapper = styled.div``;
