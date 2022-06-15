// Styled Components
import styled from "styled-components";

// Components
import MembersInfo from "./MembersInfo/MembersInfo";

const Members = () => {
  return (
    <Wrapper>
      <MembersInfo />
    </Wrapper>
  );
};

export default Members;

const Wrapper = styled.div``;
