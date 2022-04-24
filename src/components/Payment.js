import React from 'react'
import '../../src/components/Payment.css'
import Paymentcard from './cardsComponent/Paymentcard'
import tetherUSD from '../../src/images/tetherUSD.svg'
import righteth from '../../src/images/righteth.svg'


const Payment = () => {
    return (
        <div className= "payment">
            <div className="paymentHead">
                <h1>Payments</h1>
                <button>Clear</button>
            </div>
            <Paymentcard recieve ="Received USDT" imgSrc = {tetherUSD} amount= "15.2USD" date="2020-01-01"/>
            <Paymentcard recieve="Received ETH" amount="15.2USD" imgSrc = {righteth} date="2020-01-01"/>

            <div className="newTransfer">
                <button>+ New Transfer</button>
            </div>
            <div className="walletHeading">
                <h1>Wallets</h1>
            </div>
            <div className='newtransfer'>
                
            </div>
        </div>
    )
}

export default Payment
