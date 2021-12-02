// Styled Components
import styled from "styled-components";

// Redux
import { useSelector } from "react-redux";

const MembersInfo = () => {
  const userAddress = useSelector((state) => state.user.userAddress);

  return (
    <Wrapper>
      <p className="header">Work in progress</p>

      <p className="welcome">{userAddress}</p>
    </Wrapper>
  );
};

export default MembersInfo;

const Wrapper = styled.div`
  .header {
    font-weight: 900;
    font-style: normal;
    font-size: 2.5rem;
    color: #eaa721;

    padding-top: 100px;

    text-align: center;
  }

  .welcome {
    font-weight: 900;
    font-style: normal;
    font-size: 2.5rem;
    color: #eaa721;

    padding-top: 100px;

    text-align: center;
  }
`;
