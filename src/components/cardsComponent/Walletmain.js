import React from 'react'
import Walletcards from '../Walletcards'
import ethereum from '../../images/ethereum.svg'
const Walletmain = () => {
    return (
        <div>
            <Walletcards coinname = "BTC" amount="37" fullcoinname="Bitcoin" increase="+7.4"/>
            <Walletcards coinname = "LTC" amount="23" fullcoinname="Litecoin" increase="+3.4"/>
            <Walletcards coinname = "ETH" amount="15" sideImg={ethereum} fullcoinname="Ethereum" increase="+17.4"/>
            <Walletcards coinname = "DAI" amount="19" fullcoinname="DAI" increase="+7.4"/>
        </div>
    )
}

export default Walletmain
