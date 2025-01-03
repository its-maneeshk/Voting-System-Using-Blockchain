require("dotenv").config(); // Load environment variables
require("@nomiclabs/hardhat-ethers");
require("@nomiclabs/hardhat-etherscan");

module.exports = {
  solidity: "0.8.0", // Specify the Solidity version
  networks: {
    sepolia: {
      url: process.env.RPC_URL, // Use the RPC URL from the .env file
      accounts: [process.env.PRIVATE_KEY], // Use the private key from the .env file
    },
  },
  etherscan: {
    apiKey: process.env.ETHERSCAN_API_KEY, // Use the Etherscan API key for verification
  },
};
