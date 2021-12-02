// React
import { useState, useEffect } from "react";

// Next
import Link from "next/link";

// Redux
import { useDispatch } from "react-redux";
import { userAcitons } from "../../../../store/user-slice";
import { useSelector } from "react-redux";

// Styled Components
import styled from "styled-components";

// Material UI
import Button from "@mui/material/Button";

// Web3Modal
import Web3Modal from "web3modal";
import WalletConnectProvider from "@walletconnect/web3-provider";

// Ethers
import { ethers } from "ethers";

const NavLinks = () => {
  const [connected, setConnected] = useState(false);
  const dispatch = useDispatch();

  const userAddress = useSelector((state) => state.user.userAddress);

  useEffect(() => {
    if (userAddress.length > 0) {
      setConnected(true);
    }
  }, []);

  const handleConnection = async () => {
    const providerOptions = {
      walletconnect: {
        package: WalletConnectProvider, // required
        options: {
          chainId: 137,
          rpc: {
            137: "https://rpc-mainnet.matic.quiknode.pro/",
          },
          network: "matic",
        },
      },

      injected: {
        display: {
          logo: "https://github.com/MetaMask/brand-resources/raw/master/SVG/metamask-fox.svg",
          name: "MetaMask",
          description: "Connect with MetaMask in your browser",
        },
        package: null,
      },
    };

    const web3Modal = new Web3Modal({
      cacheProvider: false, // optional
      providerOptions, // required
    });

    if (connected) {
      web3Modal.clearCachedProvider();
      window.location.reload();

      dispatch(userAcitons.setUserAddress(""));
      dispatch(userAcitons.setWeb3modal(""));
      dispatch(userAcitons.setProvider(""));
      setConnected(false);
    } else {
      const connection = await web3Modal.connect();
      const provider = new ethers.providers.Web3Provider(connection);
      const signer = provider.getSigner();

      provider.on("disconnect", (error) => {
        web3Modal.clearCachedProvider();
        window.location.reload();

        dispatch(userAcitons.setUserAddress(""));
        dispatch(userAcitons.setWeb3modal(""));
        dispatch(userAcitons.setProvider(""));
        setConnected(false);
      });

      dispatch(
        userAcitons.setUserAddress(signer.provider.provider.selectedAddress)
      );
      dispatch(userAcitons.setWeb3modal(web3Modal));
      dispatch(userAcitons.setProvider(provider));

      setConnected(true);
    }
  };

  return (
    <Wrapper>
      <Link href="/cinema">Cinema</Link>
      <Link href="/nft">NFT</Link>
      <Link href="/#strategy">Strategy</Link>
      <Link href="/#story">Story</Link>
      <Link href="/faq">Faq</Link>

      <Button className="connect-button" onClick={handleConnection}>
        {connected ? <p>Disconnect</p> : <p>Connect</p>}
      </Button>
    </Wrapper>
  );
};

export default NavLinks;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 25px;

  a {
    color: #eaa721;
    text-decoration: none;
    font-size: 1.25rem;

    text-transform: uppercase;

    &:hover {
      color: rgba(234, 167, 33, 0.9);
    }
  }

  @media only screen and (max-width: 1275px) {
    display: none;
  }

  .connect-button {
    border: 2px solid #e02d41;
    width: 200px;
    color: #e02d41;
    font-size: 1.25rem;
    border-radius: 0px;
    text-transform: uppercase;

    &:hover {
      color: rgba(234, 167, 33, 0.9);
    }
  }
`;
