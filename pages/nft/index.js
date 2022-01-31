// React
import { Fragment } from "react";

// Next
import Head from "next/head";

// Components
import NFT from "../../components/NFT/NFT";

const Index = () => {
  return (
    <Fragment>
      <Head>
        <title>Flinch | NFT</title>
        <link
          rel="icon"
          href="images/neonjesus.png"
        />
      </Head>
      <NFT />
    </Fragment>
  );
};

export default Index;
