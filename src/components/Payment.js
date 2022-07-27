import React, { useState, useEffect } from "react";
import "../../src/components/Payment.scss";
import Paymentcard from "./cardsComponent/Paymentcard";
import { Newtransfer } from "./functionalities/Newtransfer";


const Payment = () => {

    // GETTING THE DATA
    const getItems = () => {
        const localList = localStorage.getItem("datas");
        console.log(localList);
        if (localList) {
            return JSON.parse(localStorage.getItem("datas"))
        }
        else {
            return [];
        }
    };


    // localStorage
    localStorage.setItem("itemm", true)
    localStorage.setItem("payment", false)
    const mypayment = localStorage.getItem("payment");
    const myypayment = JSON.parse(mypayment)

    // state
    const [New, setNew] = useState(false);
    const [payment, setPayment] = useState(true);
    const [CardValues, setCardValues] = useState(getItems());

    // functions
    function handleClick() {
        setNew(!New);
        setPayment(myypayment)

    }

    const addData = function (data) {
        console.log(data);
        console.log(CardValues);
        setCardValues((prevData) => {
            return [...prevData, data];
        });
    };

    function removePayments() {
        localStorage.removeItem("datas")
        window.location.reload()
    }

    // SETTING THE DATA
    useEffect(() => {
        localStorage.setItem("datas", JSON.stringify(CardValues));
    }, [CardValues]);


    return (
        <div className="payment">
            <div className="paymentHead">
                <h1>Payments</h1>
                <button onClick={removePayments}>Clear</button>
            </div>
            {CardValues.map((card) => {
                // setPayment(false)
                return (
                    <Paymentcard
                        key={card.id}
                        amount={card.amount}
                        recieve={card.coin}
                    />
                );
            })}

            {/* <List data={CardValues} /> */}

            {payment ? (
                <div className="noPayment">
                    YOU HAVE NO PAYMENT YET <br /> Click New Transfer To Pay
                </div>
            ) : null}
            {/* <Paymentcard amount="20USD" recieve="12" imgSrc={tetherUSD} /> */}

            <div className="newTransfer">
                <button onClick={handleClick}>+ New Transfer</button>

            </div>
            {New ? <Newtransfer onAddData={addData} /> : null}

            <div className="walletHeading">
                <h1>Live Rates.</h1>
            </div>
        </div>
    );
};

export default Payment;
