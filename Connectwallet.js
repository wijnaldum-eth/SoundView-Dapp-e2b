import { useState } from 'react';
import { ethers } from 'ethers';

function MyComponent() {
  const [provider, setProvider] = useState(null);
  const [address, setAddress] = useState(null);

  async function connectWallet() {
    try {
      const { ethereum } = window;

      if (!ethereum) {
        alert('Please install MetaMask to use this dApp');
        return;
      }

      const accounts = await ethereum.request({ method: 'eth_requestAccounts' });
      const provider = new ethers.providers.Web3Provider(ethereum);
      const signer = provider.getSigner();
      const address = await signer.getAddress();

      setProvider(provider);
      setAddress(address);
    } catch (error) {
      console.error(error);
      alert('Failed to connect to wallet');
    }
  }

  // render your component here, and include a button to call the connectWallet function
  return (
    <div>
      {address ? (
        <p>Connected with address {address}</p>
      ) : (
        <button onClick={connectWallet}>Connect wallet</button>
      )}
    </div>
  );
}
