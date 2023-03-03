import { ChainId, Thirdwebprovider} from '@thirdweb-dev/react'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <Thirdwebprovider
      desiredChainId = {ChainId.Goerli} 
      chainRpc{{
        [ChainId.Goerli]:'https://goerli.infura.io/v3/b593d0de072f4e13845e991cf40c1fa6'
      }}
    >
      <Component {...pageProps} />
    </Thirdwebprovider>
  )
}

export default MyApp