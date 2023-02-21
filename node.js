const { ethers } = require("@thirdweb-dev/sdk");

fetch('https://raw.githubusercontent.com/SoundViewMarket/SoundView-BackEnd/main/ABI-Address.json?token=GHSAT0AAAAAAB54L2CDL6FHXUWP6QTY4OK2Y7O32UQ')
  .then(response => response.json())
  .then(data =>
    
async function main() {
  // Connect to the Ethereum network using the Metamask extension
  const provider = await ethers.getDefaultProvider();

  // Create an instance of the smart contract
  const contractAddress = data.address; // replace with the actual contract address
  const abi = data.abi;
    // replace with the actual contract ABI
  const contract = new ethers.Contract(contractAddress, abi, provider);

  // Call a method on the smart contract
  const result = await contract.myMethod();

  console.log(result);
})
  .catch(error => console.error(error));

main();
