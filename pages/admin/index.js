// React
import { Fragment, useEffect, useState } from "react";

// Next
import Head from "next/head";
import { useRouter } from "next/router";

// Redux
import { useSelector } from "react-redux";

// Components
import Admin from "../../components/Admin/Admin";

const Index = () => {
  const [loaded, setLoaded] = useState(false);

  const userAddress = useSelector((state) => state.user.userAddress);

  const router = useRouter();

  useEffect(() => {
    setLoaded(false);
    if (
      userAddress.toLowerCase() !==
        "0x3C97b95FB4f8E405224c5DF44789c2af1228d1A9".toLowerCase() ||
      userAddress.length < 1
    ) {
      router.push("/");
    }

    setLoaded(true);
  }, [userAddress]);

  if (
    (loaded &&
      userAddress.toLowerCase() ===
        "0x3C97b95FB4f8E405224c5DF44789c2af1228d1A9".toLowerCase()) ||
    (userAddress.toLowerCase() ===
      "0x3C97b95FB4f8E405224c5DF44789c2af1228d1A9".toLowerCase() &&
      userAddress.length > 0)
  ) {
    return (
      <Fragment>
        <Head>
          <title>Flinch | Admin</title>
          <link rel="icon" href="./static/images/neonjesus.png" />
        </Head>
        <Admin />
      </Fragment>
    );
  } else {
    return <h1>hu</h1>;
  }
};

export default Index;
