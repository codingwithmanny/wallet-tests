// Imports
// ========================================================
import { useEffect, useState } from 'react'
import { ethers} from 'ethers';


// Main Component
// ========================================================
const App = () => {
  // State / Props
  const [walletAddress, setWalletAddress] = useState('')

  // Functions
  const requestAccount = async () => {
    await window.ethereum.request({ method: 'eth_requestAccounts' });
  }

  const onClickGetAddress = async () => {
    if (typeof window.ethereum !== undefined) {
      await requestAccount();
      // const provider = new ethers.providers.Web3Provider(window.ethereum);
      // const signer = provider.getSigner();
      // setWalletAddress(await signer.getAddress());
    }
  }

  // Hooks
  useEffect(() => {
  }, [])

  // Render
  return (
    <div className="App">
      <header className="App-header">
        <p>Hello Vite + React!</p>
        <p>
          <button type="button" onClick={onClickGetAddress}>
            Let me see your wallet!
          </button>
        </p>
        {walletAddress ? <p>
          {walletAddress}
        </p>: null}
      </header>
    </div>
  )
}

// Exports
// ========================================================
export default App
