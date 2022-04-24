import React from 'react'
import '../components/Payment.css'

//
const Walletcards = ({coinname, amount, increase, fullcoinname, sideImg}) => {
    return (
        <div className="walletcard">
            <div className="onee">
                <div className="leftitems">
                    <p className="abbrev">{coinname}</p>
                </div>
                <div className="rightitem">
                    <p>{amount}%</p>
                </div>
            </div>
            <div className="twoo">
                <div className="leftitems">
                    <p className="date">{fullcoinname}</p>
                  </div>
                <div className="rightitem">
                <p className="increase">{increase}%</p>
                </div>
                </div>
        </div>
    )
}

export default Walletcards
