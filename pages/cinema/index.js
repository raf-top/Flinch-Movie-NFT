// React
import { Fragment, useEffect, useState } from "react";

// Next
import Head from "next/head";

// Redux
import { useDispatch } from "react-redux";
import { userAcitons } from "../../store/user-slice";
import { useSelector } from "react-redux";

// Ethers
import { ethers } from "ethers";

// Contract
import SmartContract from "../../ABI/CVHWhitelist.json";

// Components
import Cinema from "../../components/Cinema/Cinema";
import PleaseSignIn from "../../components/PleaseSignIn/PleaseSignIn";

const SmartContractAddress = "0xD4228d3E0219142275866b0Ea434a3E1638889E1";

const Index = () => {
  const dispatch = useDispatch();

  const userAddress = useSelector((state) => state.user.userAddress);
  const isWhitelisted = useSelector((state) => state.user.isWhitelisted);
  const isCustomer = useSelector((state) => state.user.isCustomer);

  const fetchEligibleUsers = async () => {
    const provider = new ethers.providers.JsonRpcProvider(
      "https://speedy-nodes-nyc.moralis.io/0ef0e8f9db2b94453cbf1b52/polygon/mainnet"
    );

    const contract = new ethers.Contract(
      SmartContractAddress,
      SmartContract,
      provider
    );

    const whitelistedAddresses = await contract.getwhitelistedAddresses();
    const customers = await contract.getCustomers();

    whitelistedAddresses.forEach((addy) => {
      if (addy.toLowerCase() === userAddress.toLowerCase()) {
        dispatch(userAcitons.setIsWhitelisted(true));
      }
    });

    customers.forEach((addy) => {
      if (addy.toLowerCase() === userAddress.toLowerCase()) {
        dispatch(userAcitons.setIsCustomer(true));
      }
    });
  };

  useEffect(() => {
    fetchEligibleUsers();
  }, [userAddress, isWhitelisted, isCustomer]);

  if (userAddress.length > 0 && (isWhitelisted || isCustomer)) {
    return (
      <Fragment>
        <Head>
          <title>Flinch | Cinema</title>
          <link
            rel="icon"
            href="https://ammedodi.sirv.com/Images/neonjesus.png"
          />
        </Head>
        <Cinema />
      </Fragment>
    );
  } else {
    return (
      <Fragment>
        <Head>
          <title>Flinch | Sign In</title>
          <link
            rel="icon"
            href="https://ammedodi.sirv.com/Images/neonjesus.png"
          />
        </Head>
        <PleaseSignIn />
      </Fragment>
    );
  }
};

export default Index;
