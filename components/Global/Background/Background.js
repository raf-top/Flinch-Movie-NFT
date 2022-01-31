// Styled Components
import styled from "styled-components";

const Background = (props) => {
  return <Wrapper variant={props.variant}></Wrapper>;
};

export default Background;

const Wrapper = styled.div`
  min-height: 100vh;
  min-width: 100vw;

  width: 100vw;
  height: 100%;

  position: absolute;
  top: 0;
  left: 0;

  z-index: 0;

  ${(props) =>
    props.variant === "mint"
      ? `
    background: black
    url("https://cdn.discordapp.com/attachments/771433993744678972/914135500678393856/unknown.png")
    top left fixed;

    `
      : `
    background: black
    url("images/background.png")
    top left fixed;


    `}
`;
