async function main() {
  const [deployer] = await ethers.getSigners(); 
  console.log("Deploying contracts with the account:", deployer.address);

  // obtain contract
  const Token = await ethers.getContractFactory("MyToken");
  console.log("Deploying MyToken...");
  const token = await Token.deploy();
  await token.deployed();
  
  console.log("MyToken deployed to:", token.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
