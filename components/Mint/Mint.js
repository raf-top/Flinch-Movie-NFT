// Styled Components
import styled from "styled-components";
import React, { useEffect, useState, useRef } from "react";
import { ethers } from "ethers";
import { ToastContainer, toast } from 'material-react-toastify';
import 'material-react-toastify/dist/ReactToastify.css';

import abi from "../../ABI/contract.json";

const TESTNET_SITE = true;

const CONTRACT_ADDRESS = TESTNET_SITE ?
  "0xb1Fb24C62BC608b07665D7b1f2B0458e361713A6" :
  "0xc"
;
const CONTRACT_ABI = abi.abi;
const OPENSEA_COLLECTION_URL = TESTNET_SITE ?
  "https://https://testnets.opensea.io/collection/breadwinnersclub-official" :
  "https://opensea.io/collection/the-epics-v2"
;

const DEPLOYED_CHAINS = [4];

const Mint = () => {

  const [count, setCount] = useState(1);

  const handleCount = (cnt) => {
      if(cnt == 1) {
          if(count == mintCount) return;
          else setCount(count+1);
      } else if (cnt == -1) {
          if(count == 1) return;
          else setCount(count-1);
      }
  }

  const [currAccount, setCurrentAccount] = useState(null);
  const [currMintCount, setCurrMintCount] = useState(0);
  const [maxMintCount, setMaxMintCount] = useState(0);
  const [mintCount, setMintCount] = useState(0);
  const [price, setPrice] = useState(null);
	const [isPreSaleActive, setIsPreSaleActive] = useState(false);
	const [isPublicSaleActive, setIsPublicSaleActive] = useState(false);

  const [toastLink, setToastLink] = useState("");
  const [chainId, setChainId] = useState(1);

  // ** Mining state variables
  const [isMining, setIsMining] = useState(false);
  const [isConfirmed, setIsConfirmed] = useState(false);

  // ** Gallery Vars
  const [initialLoading, setInitialLoading] = useState(true);

  // ** Refactored get chain id logic from provider
  const getChainId = async () => {
    // @ts-ignore
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const { chainId } = await provider.getNetwork()
    setChainId(chainId);
  }

  // ** Try to connect to wallet
  const checkIfWalletIsConnected = () => {
    // @ts-ignore
    const { ethereum } = window;
    if(!ethereum) {
      toast.error('🦊 Missing Metamask!', {
        position: "top-left",
        autoClose: 3000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
      return
    }

    // ** Try to get access to the user's wallet
    ethereum.request({ method: 'eth_accounts' })
    .then((accounts) => { 
      // ** There could be multiple accounts
      if(accounts.length !== 0) {
        // ** Get the first account
        let account = accounts[0].toString().toLowerCase();

        // ** Get the chainId
        getChainId();

        // ** Store the account
        setCurrentAccount(account);

        // ** Get the contract mint count info
        getInfo();

        // ** Set up our event listener
        setupEventListener(account);
      } else {
        toast.error(<>No authorized accounts found! <br />Please connect a metamask account!</>, {
          position: "top-left",
          autoClose: 3000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
        });
      }
    })
  }

  const connectWallet = () => { 
  // @ts-ignore
    const { ethereum } = window;

    if(!ethereum) {
      toast.error('🦊 Missing Metamask!', {
        position: "top-left",
        autoClose: 3000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
    }

    ethereum.request({ method: 'eth_requestAccounts' })
    .then((accounts) => {
      let account = accounts[0].toString().toLowerCase();
      setCurrentAccount(account);

      // ** Get the chainId
      getChainId();

      // ** Get the contract mint count info
      getInfo();

      // ** Set up our event listener
      setupEventListener(account);

      // ** Refresh page
      checkIfWalletIsConnected();
    })
    .catch((e) => {
      toast.error(<>Failed to load metamask accounts! <br />Please refresh the page!</>, {
        position: "top-left",
        autoClose: 3000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
    })
  }

  const askContractToMintNft = async () => {
    try {
      // @ts-ignore
      const { ethereum } = window;

      if (ethereum) {
        const provider = new ethers.providers.Web3Provider(ethereum);
        const signer = provider.getSigner();
        const connectedContract = new ethers.Contract(CONTRACT_ADDRESS, CONTRACT_ABI, signer);

        let nftTxn;
        try {
              // @ts-ignore
              // nftTxn = await connectedContract.makeAnEpicNFT();
                if (isPreSaleActive) {  
                  // const gasPrice = await provider.getGasPrice();
                  // nftTxn = await connectedContract.preSaleMint(count);    
                  const gasPrice = await provider.getGasPrice();
                  nftTxn = await connectedContract.preSaleMint(count, { value: (price * count).toString()});                                                       
                } else {  
                  const gasPrice = await provider.getGasPrice();
                  nftTxn = await connectedContract.mint(count, { value: (price * count).toString()});                   
                }
        } catch (er) { 
          const msg = er.error && er.error.message ? er.error.message.slice(20) : "Rejected Transaction";
          toast.error(msg, {
						position: "top-left",
						autoClose: 3000,
						hideProgressBar: true,
						closeOnClick: true,
						pauseOnHover: true,
						draggable: true,
					});
          setIsMining(false);
          setIsConfirmed(false);
          return;
        }
        setIsMining(true);

        // console.log("Mining...please wait.")
        await nftTxn.wait();
        setIsMining(false);

        // console.log(`Mined, see transaction: https://rinkeby.etherscan.io/tx/${nftTxn.hash}`);
        setIsConfirmed(true);
        setTimeout(() => setIsConfirmed(false), 4000);
      } else {
        // console.log("Ethereum object doesn't exist!");
      }
    } catch (er) { 
      toast.error('🎟️ Failed to mint, please try again!', {
				position: "top-left",
				autoClose: 3000,
				hideProgressBar: true,
				closeOnClick: true,
				pauseOnHover: true,
				draggable: true,
			});
      setIsMining(false);
      setIsConfirmed(false);
    }
  }

  const getInfo = async () => { 
		try {
      // @ts-ignore
			const provider = new ethers.providers.Web3Provider(window.ethereum);
			const signer = provider.getSigner();
			const eContract = new ethers.Contract(CONTRACT_ADDRESS, CONTRACT_ABI, signer);
      
			let info = await eContract.info();
			// console.log(info);

			// Price
			// console.log("price", Number(info[0]) / Math.pow(10, 18));
			setPrice(Number(info[0]));

			// Presale Start Date
			// console.log("presaleStartDate", Number(info[4]));
			setIsPreSaleActive(Number(info[5]));
			
			// Public Sale Start Date
			// console.log("publicStartDate", Number(info[5]));
			setIsPublicSaleActive(Number(info[6]));

			// Current Supply
			// console.log("currMintCount", Number(info[3]));
			setCurrMintCount(Number(info[2]));

			// Max Supply
			// console.log("maxMintCount", Number(info[3]));
			setMaxMintCount(Number(info[3]));

      // console.log("mintcount", Number(info[4]));
      setMintCount(Number(info[4]))

		} catch (e) {
			toast.error(<>Failed to load the information from Network. <br />Make sure you are connected to Network and refresh page!</>, {
				position: "top-left",
				autoClose: 5000,
				hideProgressBar: true,
				closeOnClick: true,
				pauseOnHover: true,
				draggable: true,
			});
		}
	}


  // ** Setup our listener
  const setupEventListener = async (account) => {
    try {
      // @ts-ignore
      const { ethereum } = window;

      if (ethereum) {
        const provider = new ethers.providers.Web3Provider(ethereum);
        const signer = provider.getSigner();
        const connectedContract = new ethers.Contract(CONTRACT_ADDRESS, CONTRACT_ABI, signer);
        // console.log("setupeventlistner")
        connectedContract.on("FlinchMinted", (id,  from) => {
          let tokenId = id.toNumber();
          // let sender = from;

          // ** Update the current minted count
          setCurrMintCount(tokenId + 1);

          // ** Set toast link
          setToastLink(`https://testnets.opensea.io/assets/${CONTRACT_ADDRESS}/${tokenId}`);

          toast.success('FlinchNFT Minted!', {
            position: "top-left",
            autoClose: 3000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
          });

          // ** Reset Toast link after toast duration
          setTimeout(() => setToastLink(OPENSEA_COLLECTION_URL), 3000);
        });
      } else {
        // console.log("Ethereum object doesn't exist!");
      }
    } catch (error) {
      toast.warn(<>Not your fault, we failed to set up notifications for minting! <br/> This means you&apos;ll have to refresh the page when you finish minting :)</>, {
        position: "top-left",
        autoClose: 3000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
    }
  }

  useEffect(() => {
    checkIfWalletIsConnected();
        
  }, [])
console.log("chainID______", currAccount)
  return (
    <Wrapper>
      <a
        href={toastLink}
        target="_blank"
        rel="noreferrer"
      >
        <ToastContainer />
      </a>
      <div className="mint-section">
        <div className="mint-image">
          <img src="https://andymanh.sirv.com/mint_back_v2.png" width="700px"/>
          {/* <input type="number" className="mint-count" placeholder="1" /> */}
          {DEPLOYED_CHAINS.includes(chainId) ? (
              <div className="">
                  <label className="t-amount nft-num"><span className="nft-main">{currMintCount} / {maxMintCount}</span> <span className="nft-content">Flinchs have been minted!</span>
                  </label>
              </div>
          ) : null}
           <div className="btn-group">
              <button 
                className="minus-btn" 
                type="button" 
                disabled={currAccount ? (currMintCount >= maxMintCount || !DEPLOYED_CHAINS.includes(chainId)) ? true : false : true}
                onClick = {() => handleCount(-1)}>-
              </button>
              <input type="number" name="amount" id="amount" value={count} readOnly={true} min="1" max="20" className="mint-amount" disabled />
              <button 
                className ="plus-btn" 
                type ="button" 
                disabled={currAccount ? (currMintCount >= maxMintCount || !DEPLOYED_CHAINS.includes(chainId)) ? true : false : true}
                onClick={() => handleCount(1)}>+
              </button>
              <div className="mint-part">
                {currAccount ?
                    (
                    <button 
                        type = 'button'
                        className="mint-btn flex"
                        onClick={askContractToMintNft}
                        disabled={(currMintCount >= maxMintCount || !DEPLOYED_CHAINS.includes(chainId)) ? true : false}
                        style={{
                          opacity: (currMintCount >= maxMintCount || !DEPLOYED_CHAINS.includes(chainId)) ? 0.5 : 1,
                        }}
                    >     
                      {!isMining && !isConfirmed ?                     
                        'Mint' :
                        isMining && !isConfirmed ? (
                          <div className="loader"></div>
                        ) : null}
                    </button>
                ) : null}
                {/* {currAccount && !isMining && isConfirmed ? (
                  <div style={{display: 'flex', flexDirection: 'column', margin: 'auto'}}>
                    <img alt="Confirmed Logo" className="confirmed-logo" src={confirmedSVG} /
                    >
                  </div>
                ) : null} */}
                {currAccount ? null : (
                    <button className="mint-btn" onClick={connectWallet}>
                      Connect Wallet
                    </button>
                )}
              </div>
            </div>
            
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
