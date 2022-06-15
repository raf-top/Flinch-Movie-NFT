// Styled Components
import styled from "styled-components";

const Admin = () => {
  return (
    <Wrapper>
      <p className="header">Admin page</p>
      <p className="progress">Work in progress</p>
    </Wrapper>
  );
};

export default Admin;

const Wrapper = styled.div`
  .header {
    font-weight: 900;
    font-style: normal;
    font-size: 2.5rem;
    color: #eaa721;

    padding-top: 100px;

    text-align: center;
  }

  .progress {
    font-weight: 900;
    font-style: normal;
    font-size: 2.5rem;
    color: #eaa721;

    padding-top: 100px;

    text-align: center;
  }
`;
