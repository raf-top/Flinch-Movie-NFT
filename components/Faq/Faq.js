// Styled Components
import styled from "styled-components";
import Faqs from "react-faq-component";

// Components
import Nav from "../Global/Nav/Nav";
import Footer from "../Global/Footer/Footer";

const Faq = () => {
  return (
    <Wrapper>
      <Nav />
      <Wrapper>
        <Faqs
          data={data}
          styles={styles}
          config={config}
        />
      </Wrapper>
        

      <Footer />
    </Wrapper>
  );
};

const data = {
  title: "FAQ",
  rows: [
      {
          title: "Lorem ipsum dolor sit amet,",
          content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sed tempor sem. Aenean vel turpis feugiat,
            ultricies metus at, consequat velit. Curabitur est nibh, varius in tellus nec, mattis pulvinar metus.
            In maximus cursus lorem, nec laoreet velit eleifend vel. Ut aliquet mauris tortor, sed egestas libero interdum vitae.
            Fusce sed commodo purus, at tempus turpis.`,
      },
      {
          title: "Nunc maximus, magna at ultricies elementum",
          content:
              "Nunc maximus, magna at ultricies elementum, risus turpis vulputate quam, vitae convallis ex tortor sed dolor.",
      },
      {
          title: "Curabitur laoreet, mauris vel blandit fringilla",
          content: `Curabitur laoreet, mauris vel blandit fringilla, leo elit rhoncus nunc, ac sagittis leo elit vel lorem.
          Fusce tempor lacus ut libero posuere viverra. Nunc velit dolor, tincidunt at varius vel, laoreet vel quam.
          Sed dolor urna, lobortis in arcu auctor, tincidunt mattis ante. Vivamus venenatis ultricies nibh in volutpat.
          Cras eu metus quis leo vestibulum feugiat nec sagittis lacus.Mauris vulputate arcu sed massa euismod dignissim. `,
      },
      {
          title: "What is the package version",
          content: <p>current version is 1.2.1</p>,
      },
  ],
};

const styles = {
  bgColor: 'transparent',
  titleTextColor: "#eaa721",
  rowTitleColor: "#eaa721",
  // rowContentColor: 'grey',
  // arrowColor: "red",
};

const config = {
  animate: true,
  arrowIcon: "V",
  // tabFocus: true
};

export default Faq;

const Wrapper = styled.div`
  padding: 0 20px;
  padding-top: 60px;

  //
  width: 1300px;
  @media only screen and (max-width: 1350px) {
    width: 100%;
  }
  //
  margin: 0 auto;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 30px;

  .icon-wrapper  {
    color: #eaa721 !important;
  }
  
  .row-content-text {
    color: white !important;
    margin: 0 20px;
  }
  `;
