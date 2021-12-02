// Styled Components
import styled from "styled-components";
import Faqs from "react-faq-component";

// Components
import Nav from "../Global/Nav/Nav";
import Footer from "../Global/Footer/Footer";
import { CatchingPokemonSharp } from "@mui/icons-material";

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
          title: "What is a Flinch?",
          content: `Flinch is the world's first movie franchise on the blockchain. In the future we will look back and rember the days when
          fans had no participation or governance over the art they love. movie franchises grow into epic stories with a variety of characters. They allow for spinoffs, games,
          merchandise and other ancillary works. Now we will build a franchise as a community.`,
      },
      {
          title: "Howdo I purchase a Flinch NFT?",
          content: `- You may mint a Flinch NFT on our NFT page. We have two mints, one for Poster, one for Characters. There are 3 poster skews with 3333 of eac and 5,000 characters.
          All NFTs reward holders via the CatchingPokemonSharp. Poster NFT holders have first access to mint a CharacterData. Characther holders have governance over the franchise, access to in  person movie premieres, premiere parties and freee merch.<br>
          - As subsequent films in the franchise release, new poster NFTs will airdrop to holders.`,
      },
      {
          title: "How are Flinch NFTs distributed?",
          content: `Fair distribution. There are no bonding curves here. Buying a poster will cost .04ETH + Gas. Buying a character will cost .08ETH + Gas.`,
      },
      {
          title: "What are the benefits of owning a Flinch NFT?",
          content: `- Owning a Flinch NFT gives you access to and benefits from a movie franchise in both the digital and real world.<br>
          - We are building a large movie studio platform for lots more films. This platform will have a native token. Flinch NFTs will be able to be staked to earn this coin.<br>
          - Films are a collaborative art form. our community must collaborate to make the best franchise wcan. The metaverse is the limit.`,
      },
      {
          title: "What will happen to secondary market royalties?",
          content: `- 50 % of royalties from secondary market sales will return to the community via subsequent film develpment and production, marketing, ancilary right explitation.<br>
          -Royalties will be set of 10% for secondary sales`,
      },
      {
        title: "What is the Cinema?",
        content: `We built a cinema that streams our fimls to our NFT holders for free, for those who pay in crypto. The Cinema rewards our NFT holders. Imagine a day when we can sit in a virtual Cinema, In our avats, with ten friends from around the world, or one million random people, to watch a film.
        This is just the beginning`,
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
