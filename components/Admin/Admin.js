// Styled Components
import styled from "styled-components";

// Ethers
import { ethers } from "ethers";

// Material UI
import Button from "@mui/material/Button";

// Contract
import SmartContract from "../../ABI/CVHWhitelist.json";

const SmartContractAddress = "0xD4228d3E0219142275866b0Ea434a3E1638889E1";

const Admin = () => {
  const withdraw = async () => {
    try {
      const signer = provider.getSigner();

      const contract = new ethers.Contract(
        SmartContractAddress,
        SmartContract,
        signer
      );

      await contract.withdraw();
    } catch (err) {
      alert(err);
    }
  };

  return (
    <Wrapper>
      <p className="header">Admin page</p>
      <Button className="button" onClick={withdraw}>
        WITHDRAW
      </Button>
    </Wrapper>
  );
};

export default Admin;

const Wrapper = styled.div`
  .header {
    font-weight: 900;
    font-style: normal;
    font-size: 2.5rem;
    color: #eaa721;

    padding-top: 100px;

    text-align: center;
  }

  .progress {
    font-weight: 900;
    font-style: normal;
    font-size: 2.5rem;
    color: #eaa721;

    padding-top: 100px;

    text-align: center;
  }
`;
