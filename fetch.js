fetch('https://raw.githubusercontent.com/SoundViewMarket/SoundView-BackEnd/main/ABI-Address.json?token=GHSAT0AAAAAAB54L2CDL6FHXUWP6QTY4OK2Y7O32UQ')
  .then(response => response.json())
  .then(data => {
    const abi = data.abi;
    const address = data.address;
    const myContract = new web3.eth.Contract(abi, address);
    // use myContract to interact with your contract
  })
  .catch(error => console.error(error));
