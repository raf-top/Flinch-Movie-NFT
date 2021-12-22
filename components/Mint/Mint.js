// Styled Components
import styled from "styled-components";
import React, { useEffect, useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { connect } from "../..//redux/blockchain/blockchainActions";
import { fetchData } from "../../redux/data/dataActions";

const Mint = () => {

  const dispatch = useDispatch();
  const blockchain = useSelector((state) => state.blockchain);
  const data = useSelector((state) => state.data);
  const [claimingNft, setClaimingNft] = useState(false);
  const [feedback, setFeedback] = useState(`Click buy to mint your NFT.`);
  const [mintAmount, setMintAmount] = useState(1);
  const [CONFIG, SET_CONFIG] = useState({
    CONTRACT_ADDRESS: "",
    SCAN_LINK: "",
    NETWORK: {
      NAME: "",
      SYMBOL: "",
      ID: 0,
    },
    NFT_NAME: "",
    SYMBOL: "",
    MAX_SUPPLY: 1,
    WEI_COST: 0,
    DISPLAY_COST: 0,
    GAS_LIMIT: 0,
    MARKETPLACE: "",
    MARKETPLACE_LINK: "",
    SHOW_BACKGROUND: false,
  });

  const claimNFTs = () => {
    let cost = CONFIG.WEI_COST;
    let gasLimit = CONFIG.GAS_LIMIT;
    let totalCostWei = String(cost * mintAmount);
    let totalGasLimit = String(gasLimit * mintAmount);
    console.log("Cost: ", totalCostWei);
    console.log("Gas limit: ", totalGasLimit);
    setFeedback(`Minting your ${CONFIG.NFT_NAME}...`);
    setClaimingNft(true);
    blockchain.smartContract && blockchain.smartContract.methods
      .mint()
      .send({
        gasLimit: String(totalGasLimit),
        to: CONFIG.CONTRACT_ADDRESS,
        from: blockchain.account,
        value: totalCostWei,
      })
      .once("error", (err) => {
        console.log(err);
        setFeedback("Sorry, something went wrong please try again later.");
        setClaimingNft(false);
      })
      .then((receipt) => {
        console.log(receipt);
        setFeedback(
          `WOW, the ${CONFIG.NFT_NAME} is yours! go visit Opensea.io to view it.`
        );
        setClaimingNft(false);
        dispatch(fetchData(blockchain.account));
      });
  };

  const decrementMintAmount = () => {
    let newMintAmount = mintAmount - 1;
    if (newMintAmount < 1) {
      newMintAmount = 1;
    }
    setMintAmount(newMintAmount);
  };

  const incrementMintAmount = () => {
    let newMintAmount = mintAmount + 1;
    if (newMintAmount > 10) {
      newMintAmount = 10;
    }
    setMintAmount(newMintAmount);
  };

  const getData = () => {
    if (blockchain.account !== "" && blockchain.smartContract !== null) {
      dispatch(fetchData(blockchain.account));
    }
  };

  const getConfig = async () => {
    const configResponse = await fetch("/config/config.json", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    });
    const config = await configResponse.json();
    SET_CONFIG(config);
  };

  useEffect(() => {
    getConfig();
  });

  useEffect(() => {
    dispatch(connect());
  }, [dispatch]);

  useEffect(() => {
    getData();
  }, [blockchain.account]);

  return (
    <Wrapper>
      <div className="mint-section">
        <div className="mint-image">
          <img src="https://andymanh.sirv.com/mint_back.png" width="700px"/>
          <input type="text" className="mint-count" placeholder="1"/>
        </div>
      </div>
    </Wrapper>
  );
};

export default Mint;

const Wrapper = styled.div`
  @font-face {
    font-family: number-font;
    src: url('./number.ttf');
  }
  .container {
    width: 100%;
    padding: 60px;
    position: relative;
  }

  .mint-image{
    position: relative;
  }
  .mint-section {
    position: relative;
    width: auto;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .mint-count {
    position: absolute;
    top: 209px;
    right: 280px;
    padding: 5px;
    font-size: 34px;
    display: flex;
    align-items: center;
    background: transparent;
    border: transparent;
    color: white !important;
    width: 45px;
    text-align: center;
    font-family: number-font;
  }
  input::placeholder {
    color: white !important;
    font-size: 34px;
    padding: 5px;
  }

  input:focus-visible {
      outline: none;
  }
`;
