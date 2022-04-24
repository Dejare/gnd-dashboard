import React from 'react'
import '../../components/Payment.css'
const Paymentcard = ({recieve, imgSrc, amount, date, imgg}) => {
    return (
        <div className="paymentmaincard">
            <div className="onee">
                <div className="leftitems">
                    <img src ={imgSrc}/>
                    <p>{recieve}</p>
                </div>
                <div className="rightitem">
                    <p>{amount}</p>
                </div>
            </div>
            <div className="twoo">
                <div className="leftitems">
                    <p className="date">{date}</p>
                  </div>
                <div className="rightitem">
                {/* <img src={imgg}/>     */}
                </div>
                </div>
        </div>
    )
}

export default Paymentcard
