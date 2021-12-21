// Styled Components
import styled from "styled-components";

// Redux
import { useDispatch } from "react-redux";
import { userAcitons } from "../../../store/user-slice";
import { useSelector } from "react-redux";

// Ethers
import { ethers } from "ethers";

// Material UI
import Button from "@mui/material/Button";

// Contract
import SmartContract from "../../../ABI/CVHWhitelist.json";

const SmartContractAddress = "0xD4228d3E0219142275866b0Ea434a3E1638889E1";

const PleaseSignInPay = () => {
  const userAddress = useSelector((state) => state.user.userAddress);
  const isWhitelisted = useSelector((state) => state.user.isWhitelisted);
  const isCustomer = useSelector((state) => state.user.isCustomer);

  const provider = useSelector((state) => state.user.provider);

  const dispatch = useDispatch();

  const getWhitelistCost = async () => {
    try {
      const provider = new ethers.providers.JsonRpcProvider(
        "https://speedy-nodes-nyc.moralis.io/0ef0e8f9db2b94453cbf1b52/polygon/mainnet"
      );

      const contract = new ethers.Contract(
        SmartContractAddress,
        SmartContract,
        provider
      );

      const mintCost = await contract.cost();

      return mintCost.toString();
    } catch (error) {
      alert(error);
    }
  };

  const whitelistUser = async () => {
    try {
      const signer = provider.getSigner();

      const contract = new ethers.Contract(
        SmartContractAddress,
        SmartContract,
        signer
      );

      const cost = await getWhitelistCost();

      await contract.addCustomer({
        value: cost.toString(),
      });

      dispatch(userAcitons.setIsCustomer(true));
    } catch (err) {
      alert(err);
    }
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
  margin-bottom: 50px;
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
    align-items: flex-start;
    gap: 20px;
    padding: 20px;
    .header {
      text-align: left;
    }
    .button {
      border: 2px solid rgb(94, 194, 163);
      width: 200px;
      color: #eaa721;
      font-size: 1.25rem;
      border-radius: 0px;
      text-transform: uppercase;
      &:hover {
        color: rgba(234, 167, 33, 0.9);
      }
    }
  }
`;
