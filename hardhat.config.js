/** @type import('hardhat/config').HardhatUserConfig */
require('@nomiclabs/hardhat-ethers');

module.exports = {
  solidity: "0.8.20",
  networks: {
    mainnet: {
      url: "https://mainnet.infura.io/v3/YOUR_INFURA_PROJECT_ID", // Infura URL for sepolia
      accounts: ["YOUR_WALLET_PRIVATE_KEY"]      // Your Metamask private key
    }
  }
};