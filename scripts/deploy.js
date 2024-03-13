const hre = require("hardhat");

async function main() {
  const Domains = await hre.ethers.getContractFactory("Domains");

  const domains = await Domains.deploy();

  await domains.deployed();
  console.log(`Disperse contract address: ${domains.address}`);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });