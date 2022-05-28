const { ethers, utils } = require('hardhat');

require('@nomiclabs/hardhat-waffle');
require('@nomiclabs/hardhat-ethers');

async function main() {
  const [depositor, beneficiary, arbiter] = await ethers.getSigners();
  // console.log(beneficiary);

  // console.log("Deploying contracts with the account:", deployer.address);

  // console.log("Account balance:", (await deployer.getBalance()).toString());

  const Escrow = await ethers.getContractFactory("Escrow");
  const escrow = await Escrow.deploy(arbiter.getAddress(), beneficiary.getAddress(), {
    value: ethers.utils.parseEther("0.01")
  });

  console.log("Token address:", escrow.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
