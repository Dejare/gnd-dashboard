import '../../App.scss'
import Centercard from './Centercard'
import { SiLitecoin, SiEthereum, SiBitcoin } from 'react-icons/si'
const Maincard = () => {
    return (
        <div className='mainCard flex'>
            < Centercard cryptoAsset="Bitcoin" cryptoAssetValue="0.566699 BTC" cryptoAssetValueUSD="11,032.24 USD " alt="BTC" imgSrc={<SiBitcoin />} />
            < Centercard cryptoAsset="Litecoin" bg="#ffc0f4" cryptoAssetValue="120.564 LTC" cryptoAssetValueUSD="37747.78 USD" alt="LTC" imgSrc={<SiLitecoin />} />
            < Centercard cryptoAsset="Ethereum" bg="#86dceb" cryptoAssetValue="10.612 ETH" cryptoAssetValueUSD="1242.31 USD" alt="ETH" imgSrc={<SiEthereum />} />
        </div>
    )
}

export default Maincard
