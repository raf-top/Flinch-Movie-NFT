// Styled Components
import styled from "styled-components";

import Nav from "../Global/Nav/Nav";

import Footer from "../Global/Footer/Footer";

const Admin = () => {
  return (
    <Wrapper>
      <Nav />
      <p className="header">Admin page</p>
      <p className="progress">Work in progress</p>
      <Footer />
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
