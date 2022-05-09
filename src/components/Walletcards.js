import React from "react";
import "../components/Payment.scss";

//
const Walletcards = ({ coinname, amount, increase, fullcoinname, sideImg }) => {
    return (
        <div className="walletCard flex flex-column justify-between w-4/4 m-auto p-3 bg-gray-300 m-4 p-8 rounded-md">
            <div className="sideImg m-auto mx-0">
                <img src={sideImg} alt="coinImage" width="30px" />
            </div>
            <div className="walletCardTop justify-between m-auto mx-0">
                <div className="WalletCardTopLeft">
                    <p className="abbrev">{coinname}</p>
                </div>
                <div className="WalletCardTopRight">
                    <p>{amount < 0 ? amount : amount} USD</p>
                </div>
            </div>
            <div className="WalletCardBottom text-center m-auto mx-0">
                <div className="WalletCardBottomLeft">
                    <p className="date">{fullcoinname}</p>
                </div>
                <div className="WalletCardBottomRight">
                    <p className="increase">{increase}</p>
                </div>
            </div>
        </div>
    );
};

export default Walletcards;
