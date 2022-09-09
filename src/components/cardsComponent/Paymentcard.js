import React from "react";
import "../../components/Payment.scss";
const Paymentcard = ({ recieve, imgSrc, amount }) => {
    const today = new Date();
    // console.log(today);
    const year = today.getFullYear();
    const month = today.getMonth() + 1;
    const day = today.getDate();
    return (
        <div className="flex flex-row p-8 w-5/6 m-auto justify-around bg-gray-300 my-5 items-center" >
            <div className="text-3xl text-gray-900">
                <img src={imgSrc} alt="" />
            </div>
            <div className="px-4">
                <div className="paymentCardTopLeft">
                    <p className="abbrev mb-4">Sent {recieve}</p>
                </div>
                <div className="paymentCardTopRight">
                    <p>{day}/{month}/{year}</p>
                </div>
            </div>
            <div>
                <div className="paymentCardBottomLeft">
                    <p className="date">{amount}</p>
                </div>
                <div className="paymentCardBottomRight">
                    <p className="increase">APPROVED!</p>
                </div>
            </div>
        </div>
    );
};

export default Paymentcard;
