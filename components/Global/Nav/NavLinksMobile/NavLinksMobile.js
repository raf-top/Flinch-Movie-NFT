// React
import { Fragment, useState, useEffect } from "react";
import ReactDOM from "react-dom";

// Next
import Link from "next/link";

// Redux
import { useDispatch } from "react-redux";
import { userAcitons } from "../../../../store/user-slice";
import { useSelector } from "react-redux";

// Styled Components
import styled from "styled-components";

// Web3Modal
import Web3Modal from "web3modal";
import WalletConnectProvider from "@walletconnect/web3-provider";

// Ethers
import { ethers } from "ethers";

// Material UI
import Button from "@mui/material/Button";

// Framer Motion
import { motion } from "framer-motion";

// Framer Motion Variables
const wrapperVariants = {
  hidden: { x: "100%" },
  visible: { x: "0%" },
};

const NavLinksMobile = (props) => {
  const [connected, setConnected] = useState(false);
  const dispatch = useDispatch();

  const userAddress = useSelector((state) => state.user.userAddress);

  const mobileMenuHandler = () => {
    props.mobileMenuHandler();
    console.log('here')
  };

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

  return (
    <Fragment>
      {ReactDOM.createPortal(
        <Fragment>
          <Wrapper
            variants={wrapperVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
            transition={{ duration: 0.1 }}
          >
            <Link href="/cinema" >
              <Button className="link-button" onClick={mobileMenuHandler}>Cinema</Button>
            </Link>
            <Link href="/nft">
             <Button className="link-button" onClick={mobileMenuHandler}>NFT</Button>
            </Link>
            <Link href="/#strategy">
              <Button className="link-button" onClick={mobileMenuHandler}>Strategy</Button>      
            </Link>
            <Link href="/#story">
              <Button className="link-button" onClick={mobileMenuHandler}>Story</Button>   
            </Link>
            <Link href="https://www.ardorpictures.com/collections/all">
              <Button className="link-button">Shop</Button>   
            </Link>
            <Link href="/faq">
              <Button className="link-button" onClick={mobileMenuHandler}>FAQ</Button> 
            </Link>
            <Button className="connect-button" onClick={handleConnection}>
              {connected ? <p>Disconnect</p> : <p>Connect</p>}
            </Button>
          </Wrapper>
        </Fragment>,
        document.getElementById("overlay")
      )}
    </Fragment>
  );
};

export default NavLinksMobile;

const Wrapper = styled(motion.div)`
  height: 100%;
  width: 100%;
  background-color: #191919;
  text-align: center;
  z-index: 1000;

  position: fixed;
  left: 0;
  top: 0;

  overflow-y: scroll;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 25px;

  min-height: 400px;
  overflow: scroll;

  a, button {
    color: #eaa721;
    text-decoration: none;
    font-size: 1.35rem;

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
    height: 14px;
  }

  .connect-button {
    border: 2px solid rgb(94, 194, 163);
    width: 200px;
    color: #eaa721;
    font-size: 1.35rem;
    border-radius: 0px;
    text-transform: uppercase;

    &:hover {
      color: rgba(234, 167, 33, 0.9);
    }
  }
`;
