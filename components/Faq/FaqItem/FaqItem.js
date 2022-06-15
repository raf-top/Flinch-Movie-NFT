// Styled Components
import styled from "styled-components";

// Material UI
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const FaqItem = (props) => {
  const items = props.info.split("#");

  return (
    <Wrapper>
      <Accordion className="accordion">
        <AccordionSummary
          expandIcon={<ExpandMoreIcon className="icon" />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <p className="faq-header">{props.header}</p>
        </AccordionSummary>
        <AccordionDetails>
          <ul>
            {items.map((x,i) => (
              <li className="faq-info" key={i}>{x}</li>
            ))}
          </ul>
        </AccordionDetails>
      </Accordion>
    </Wrapper>
  );
};

export default FaqItem;

const Wrapper = styled.div`
  background-color: transparent;
  border: 0px solid transparent;
  outline: 0px solid transparent;
  .accordion {
    color: #fff;
    background-color: transparent;
    border: 0px solid transparent;
    outline: 0px solid transparent;
    box-shadow: none;
    //
    width: 750px;
    @media only screen and (max-width: 800px) {
      width: 100%;
    }
    //
    .icon {
      fill: rgb(94, 194, 163);
      transform: scale(1.5);
    }
  }
  .faq {
    &-header {
      color: #fff;
      font-size: 1.2rem;
      line-height: 31px;
      font-family: acumin-pro-wide, sans-serif;
    }
    &-info {
      color: #fff;
      font-size: 1.2rem;
      line-height: 31px;
      font-family: acumin-pro-wide, sans-serif;
    }
  }

  ul {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }
`;
