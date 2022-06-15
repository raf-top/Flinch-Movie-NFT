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

  useEffect(() => {
    if (userAddress.length > 0) {
      setConnected(true);
    }
  }, []);

  const mobileMenuHandler = () => {
    console.log("hi");
    props.mobileMenuHandler();
  };

  const handleConnection = async () => {
    const web3Modal = new Web3Modal();

    if (connected) {
      web3Modal.clearCachedProvider();

      dispatch(userAcitons.setUserAddress(""));

      setConnected(false);
    } else {
      const connection = await web3Modal.connect();
      const provider = new ethers.providers.Web3Provider(connection);
      const signer = provider.getSigner();

      // signer.provider.provider.selectedAddress

      dispatch(
        userAcitons.setUserAddress(signer.provider.provider.selectedAddress)
      );

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
            <Link href="/cinema">
              <p onClick={mobileMenuHandler}>Cinema</p>
            </Link>

            <Link href="/faq">
              <p onClick={mobileMenuHandler}>Faq</p>
            </Link>

            <Link href="/#strategy">
              <p onClick={mobileMenuHandler}>Strategy</p>
            </Link>

            <Link href="/#story">
              <p onClick={mobileMenuHandler}>Story</p>
            </Link>

            <Link href="/nft">
              <p onClick={mobileMenuHandler}>NFT</p>
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

  p {
    color: #eaa721;
    text-decoration: none;
    font-size: 1.35rem;

    text-transform: uppercase;

    &:hover {
      color: rgba(234, 167, 33, 0.9);
    }
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
