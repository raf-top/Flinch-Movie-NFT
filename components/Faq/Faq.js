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
      <Wrappertwo>
        <Faqs
          data={data}
          styles={styles}
          config={config}
        />
      </Wrappertwo>    
      <Footer />
    </Wrapper>
  );
};

const data = {
  title: "FAQ",
  rows: [
      {
          title: "What is Flinch?",
          content: `Flinch is the world's first movie franchise on the blockchain. In the future we will look back and remember the days when
          fans had no participation or governance over the art they love. Movie franchises grow into epic stories with a variety of characters. They allow for spinoffs, games,
          merchandise and other ancillary works. Now we will build a franchise as a community.`,
      },
      {
          title: "How do I purchase a Flinch NFT?",
          content: `<ul><li>You may mint a Flinch NFT on our NFT page. We have two mints, one for Posters, one for Characters. There are 3 poster skews with 3,333 of each and 5,000 characters.
          All NFTs reward holders via the Cinema. Poster NFT holders have first access to mint a Character. Characther holders have governance over the franchise, access to in person movie premieres, premiere parties and free merch.</li>
          <li>As subsequent films in the franchise release, new poster NFTs will airdrop to holders.</li>`,
      },
      {
          title: "How are Flinch NFTs distributed?",
          content: `Fair distribution. There are no bonding curves here. Buying a poster will cost .04ETH + Gas. Buying a Character will cost .08ETH + Gas.`,
      },
      {
          title: "What are the benefits of owning a Flinch NFT?",
          content: `<ul><li>Owning a Flinch NFT gives you access to and benefits from a movie franchise in both the digital and real world.</li>
          <li> We are building a large movie studio platform for lots more films. This platform will have a native token. Flinch NFTs will be able to be staked to earn this coin.</li>
          <li> Films are a collaborative art form. Our community must collaborate to make the best franchise we can. The metaverse is the limit.</li></ul>`,
      },
      {
          title: "What will happen to secondary market royalties?",
          content: `Royalties will be set to 10% for secondary sales`,
      },
      {
        title: "What is the Cinema?",
        content: `<ul><li>We built a Cinema that streams our films to our NFT holders for free or for non NFT holders who pay in crypto. The Cinema rewards our NFT holders. Imagine a day when 
        we can sit in a virtual Cinema, in our avatar, with ten friends from around the world, or one million random people, to watch a film. This is just the beginning.</li>
        <li>When you watch Flinch in the Cinema you are added to the whitelist. Post-mint all Cinema visitors will be eligible for
        random airdrops of Poster and Character NFTs and much more. Going to the movies is the gift that keeps giving.</li>
        <li>Currently Matic is the best payment solution for the cinema. We're working on other chain and coin payment solutions to broaden our reach.</li></ul>`
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
  padding-top: 60px;

  //
  width: 100vw;
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

  const Wrappertwo = styled.div`
  padding: 60px;
  `;
