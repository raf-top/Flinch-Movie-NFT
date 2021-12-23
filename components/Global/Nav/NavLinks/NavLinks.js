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
import IconButton from "@mui/material/IconButton";

// Web3Modal
import Web3Modal from "web3modal";
import WalletConnectProvider from "@walletconnect/web3-provider";

// import  { Mint}  from "../../../Mint/Mint";

// Ethers
import { ethers } from "ethers";
// import ConnectToWalletConnect from "web3modal/dist/providers/connectors/walletconnect";

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

      const addy = await signer.getAddress();

      dispatch(userAcitons.setUserAddress(addy));

      dispatch(userAcitons.setWeb3modal(web3Modal));
      dispatch(userAcitons.setProvider(provider));

      setConnected(true);
    }
  };

  const handleMintBtn = () => {
    if (typeof window !== "undefined") {
      if (window.location.pathname.includes("mint")) {
        return;
      } else { 
        return <Button className="connect-button" onClick={handleConnection}>
                {connected ? <p>Disconnect</p> : <p>Connect</p>}
              </Button>;
      }
    }     
  }
  
  return (
    <Wrapper>
      <Button className="link-button">
        <Link href="/cinema">Cinema</Link>
      </Button>

      <Button className="link-button">
        <Link href="/nft">NFT</Link>
      </Button>

      <Button className="link-button">
        <Link href="/#strategy">Strategy</Link>
      </Button>

      <Button className="link-button">
        <Link href="/#story">Story</Link>
      </Button>

      <Button className="link-button">
        <Link href="https://www.ardorpictures.com/collections/all">Shop</Link>
      </Button>

      <Button className="link-button">
        <Link href="/faq">Faq</Link>
      </Button>

      <Button className="link-button">
        <Link href="/mint">Mint</Link>
      </Button>
      { handleMintBtn() }
     
    </Wrapper>
  );
};

export default NavLinks;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  a {
    color: #eaa721;
    text-decoration: none;
    font-size: 1.25rem;
    text-transform: uppercase;
    cursor: pointer;
    &:hover {
      color: rgba(234, 167, 33, 0.9);
    }
  }
  .link-button {
    //  width: 150px;
    color: #eaa721;
    text-decoration: none;
    font-size: 1.25rem;
    text-transform: uppercase;
    cursor: pointer;
    height: 75px;
    &::placeholder {
      /* Chrome, Firefox, Opera, Safari 10.1+ */
      color: rgb(94, 194, 163);
      opacity: 1; /* Firefox */
    }
    &:-ms-input-placeholder {
      /* Internet Explorer 10-11 */
      color: rgb(94, 194, 163);
    }
    &::-ms-input-placeholder {
      /* Microsoft Edge */
      color: rgb(94, 194, 163);
    }
  }
  @media only screen and (max-width: 1275px) {
    display: none;
  }
  .connect-button {
    border: 2px solid rgb(94, 194, 163);
    width: 200px;
    color: #eaa721;
    font-size: 1.25rem;
    border-radius: 0px;
    text-transform: uppercase;
    margin-left: 20px;
    &:hover {
      color: rgba(234, 167, 33, 0.9);
    }
  }
`;
