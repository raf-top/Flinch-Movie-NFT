// React
import { Fragment } from "react";

// Next
import Head from "next/head";

// Components
import Home from "../components/Home/Home";

const Index = () => {
  return (
    <Fragment>
      <Head>
        <title>Flinch | Home</title>
        <link rel="icon" href="https://ammedodi.sirv.com/Images/neonjesus.png" />
      </Head>
      <Home />
    </Fragment>
  );
};

export default Index;
