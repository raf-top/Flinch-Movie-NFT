// React
import { Fragment } from "react";

// Next
import Head from "next/head";
import { useRouter } from "next/router";

// Redux
import { useSelector } from "react-redux";

// Components
import Members from "../../components/Members/Members";

import PleaseSignIn from "../../components/PleaseSignIn/PleaseSignIn";

const Index = () => {
  const isWhitelisted = useSelector((state) => state.user.isWhitelisted);
  const userAddress = useSelector((state) => state.user.userAddress);

  if (isWhitelisted && userAddress.length > 0) {
    return (
      <Fragment>
        <Head>
          <title>Flinch | Members</title>
          <link rel="icon" href="images/neonjesus.png" />
        </Head>
        <Members />
      </Fragment>
    );
  } else {
    return (
      <Fragment>
        <Head>
          <title>Flinch | Members</title>
          <link rel="icon" href="images/neonjesus.png" />
        </Head>
        <PleaseSignIn />
      </Fragment>
    );
  }
};

export default Index;
