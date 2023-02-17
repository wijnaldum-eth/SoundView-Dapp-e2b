npm install @thirdweb-dev/react @thirdweb-dev/sdk ethers@5

import { Web3Button } from "@thirdweb-dev/react";

export default function Component() {
  return (
    <Web3Button
      contractAddress="0x7A9B066C00DC5b2229c08c805179f158C4C1E831"
      action={(contract) => {
        // Any action with your contract
      }}
    >
      Do something
    </Web3Button>
  )
}
