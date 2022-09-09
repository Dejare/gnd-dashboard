/* eslint-disable default-case */
import React, { useState } from "react";
import { useSelector } from "react-redux";
import "../../src/components/Payment.scss";
import Paymentcard from "./cardsComponent/Paymentcard";
import { Newtransfer } from "./functionalities/Newtransfer";
import { clearPayment, numberOfPayment } from "../redux/slice/paymentSlice";
import { useDispatch } from "react-redux";
import { SiLitecoin, SiEthereum, SiBitcoin } from 'react-icons/si'

const Payment = () => {
    const dispatch = useDispatch()
    const allPayment = useSelector((state) => state.payment)
    const [New, setNew] = useState(false);

    const trial = dispatch(numberOfPayment())

    console.log(trial)


    return (
        <div className="payment">
            <div className="paymentHead">
                <h1>Payments </h1>
                <button onClick={() => dispatch(clearPayment())} >Clear</button>
            </div>
            {allPayment.map((card) => {
                // setPayment(false)
                return (
                    <Paymentcard
                        key={card.id}
                        amount={card.amount}
                        recieve={card.coin}
                        imgSrc={() => {
                            // switch (card.coin) {
                            //     case "ETH":
                            //         <SiEthereum />
                            //         break;
                            //     case "BTC":
                            //         <SiBitcoin />
                            //         break
                            //     case "LTC":
                            //         <SiLitecoin />
                            // }
                            // console.log(card.coin)
                            if (card.coin === "BTC") {
                                return <SiBitcoin />
                            }
                            if (card.coin === "ETH") {
                                return <SiEthereum />
                            }
                            if (card.coin === "LTC") {
                                return <SiLitecoin />
                            }
                        }}
                    />
                );
            })}


            <div className="newTransfer">
                <button onClick={() => setNew(!New)}> {New ? "- Cancel Transfer" : " +  New Transfer"} </button>

            </div>
            {New && <Newtransfer />}

            <div className="walletHeading">
                <h1>Live Rates.</h1>
            </div>
        </div>
    );
};

export default Payment;
