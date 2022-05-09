import React, { useState, useRef, useEffect } from "react";
import "../../src/components/Payment.scss";
import Paymentcard from "./cardsComponent/Paymentcard";
import tetherUSD from "../../src/images/tetherUSD.svg";
import righteth from "../../src/images/righteth.svg";
import { Newtransfer } from "./functionalities/Newtransfer";
import pay from "../db/pay.json";
import List from './functionalities/List'

const Payment = () => {
    const [New, setNew] = useState(false);
    const [payment, setPayment] = useState(false)
    function handleClick() {
        setNew(!New);
    }
    const [CardValues, setCardValues] = useState([]);

const addData = function (data) {
    console.log(data);
    console.log(CardValues);
    setCardValues((prevData) => {
        return [...prevData, data]
    })
}

// if (CardValues[0].id === null) {
//     setPayment(true)
// }

    return (
        <div className="payment">
            <div className="paymentHead">
                <h1>Payments</h1>
                <button>Clear</button>
            </div>

        {
            CardValues.map((card)=> {
                return <Paymentcard key={card.id} amount={card.amount} recieve={card.coin}/>
            })
        }
            {/* <List data={CardValues} /> */}
            {New ? <Newtransfer 
            onAddData={addData}/> : null}
            {
                payment  ? <div className="noPayment">YOU HAVE NO PAYMENT YET <br/> Click New Transfer To Pay</div> : null
            }
            <Paymentcard amount="20USD" recieve="12" imgSrc={tetherUSD}/>

            <div className="newTransfer">
                <button onClick={handleClick}>+ New Transfer</button>
            </div>
           
          
            <div className="walletHeading">
                <h1>Live Rates.</h1>
            </div>
        </div>
    );
};

export default Payment;
