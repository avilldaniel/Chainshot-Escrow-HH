require("@nomiclabs/hardhat-waffle");
require('dotenv').config();

module.exports = {
  solidity: "0.7.5",
  paths: {
    artifacts: "./app/artifacts",
  },
  networks: {
    rinkeby: {
      url: process.env.RINKEBY_JSONRPC_URL,
      accounts: [process.env.DEPOSITOR_KEY, process.env.BENEFICIARY_KEY, process.env.ARBITER_KEY]
    }
  }
};
