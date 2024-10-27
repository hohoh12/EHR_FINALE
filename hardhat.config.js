require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();
const privateKeys = process.env.PRIVATE_KEYS || "7c852118294e51e653712a81e05800f419141751be58f605c371e15141b007a6";
const goerliApiKey = process.env.GOERLI_API_KEY || "https://goerli.infura.io/v3/4ad2a98165ee4f7788a9fa321d43427e";
const mumbaiApiKey = process.env.MUMBAI_API_KEY || "https://polygon-mainnet.infura.io/v3/4ad2a98165ee4f7788a9fa321d43427e";
module.exports = {
  solidity: "0.8.18",
  networks: {
    localhost: {},
    goerli: {
      url: goerliApiKey,
      accounts: privateKeys.split(","),
    },
    mumbai: {
      url: mumbaiApiKey,
      accounts: privateKeys.split(","),
    },
  },
};
