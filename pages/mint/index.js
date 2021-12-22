// React
import { Fragment } from "react";

// Next
import Head from "next/head";

// Components
import Mint from "../../components/Mint/Mint";

const Index = () => {
  return (
    <Fragment>
      <Head>
        <title>Flinch | Mint</title>
        <link
          rel="icon"
          href="https://ammedodi.sirv.com/Images/neonjesus.png"
        />
      </Head>
      <Mint />
    </Fragment>
  );
};

export default Index;
