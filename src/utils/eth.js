import { ethers } from "ethers";
import VotingABI from "../votingABI/VotingABI.json"; // Path to your ABI file

const CONTRACT_ADDRESS = "0x5fbdb2315678afecb367f032d93f642f64180aa3"; // Replace with your deployed contract address

export const getContract = () => {
  // Make sure MetaMask is available
  if (typeof window.ethereum !== "undefined") {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();
    const contract = new ethers.Contract(CONTRACT_ADDRESS, VotingABI, signer);
    return contract;
  } else {
    throw new Error("MetaMask is not installed!");
  }
};

export const getProvider = () => {
  if (typeof window.ethereum !== "undefined") {
    return new ethers.providers.Web3Provider(window.ethereum);
  } else {
    throw new Error("MetaMask is not installed!");
  }
};
