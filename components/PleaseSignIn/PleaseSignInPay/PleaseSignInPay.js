// Styled Components
import styled from "styled-components";

// Redux
import { useDispatch } from "react-redux";
import { userAcitons } from "../../../store/user-slice";
import { useSelector } from "react-redux";

// Web3Modal
import Web3Modal from "web3modal";

// Ethers
import { ethers } from "ethers";

// Material UI
import Button from "@mui/material/Button";

// Contract
import SmartContract from "../../../ABI/CVHWhitelist.json";

const SmartContractAddress = "0x513e24574D9C39533B3BC14e6CfB3eBFC2107E86";

const PleaseSignInPay = () => {
  const userAddress = useSelector((state) => state.user.userAddress);
  const isWhitelisted = useSelector((state) => state.user.isWhitelisted);
  const isCustomer = useSelector((state) => state.user.isCustomer);

  const dispatch = useDispatch();

  const whitelistUser = async () => {
    try {
      const web3Modal = new Web3Modal();
      const connection = await web3Modal.connect();
      const provider = new ethers.providers.Web3Provider(connection);
      const signer = provider.getSigner();

      const contract = new ethers.Contract(
        SmartContractAddress,
        SmartContract,
        signer
      );

      await contract.addCustomer({
        value: (10000000000000000).toString(),
      });

      dispatch(userAcitons.setIsCustomer(true));
    } catch (error) {}
  };

  return (
    <Wrapper>
      {!isWhitelisted && userAddress.length > 0 && (
        <div className="pay">
          <p className="header">
            Please send 2 MATIC here to gain access to the cinema
          </p>

          <Button className="button" onClick={whitelistUser}>
            SEND
          </Button>
        </div>
      )}

      {/* {isWhitelisted && <p>You're whitelisted </p>} */}
    </Wrapper>
  );
};

export default PleaseSignInPay;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  padding: 0 20px;

  p {
    color: #fff;
    font-size: 20px;
  }

  .pay {
    background-color: #191919;

    //
    width: 600px;
    @media only screen and (max-width: 650px) {
      width: 100%;
    }

    //

    border: 2px solid #eaa721;

    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    gap: 20px;

    padding: 20px;

    .header {
      text-align: left;
    }

    .button {
      border: 2px solid #5ec2a3;
      width: 200px;
      color: #eaa721;
      font-size: 1.25rem;
      border-radius: 35px;
      text-transform: uppercase;

      &:hover {
        color: rgba(234, 167, 33, 0.9);
      }
    }
  }
`;
