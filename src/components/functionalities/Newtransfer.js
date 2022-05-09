import React, { useState, useEffect, useRef } from "react";
import "./function.scss";
import "../../style/_base.scss";
import Sent from "./Sent";
import { BallTriangle } from "react-loader-spinner";
import gsap from "gsap";
import pay from "../../db/pay.json";
export const Newtransfer = (props) => {
    const [Amount, setAmount] = useState("");
    const [Wallet, setWallet] = useState("");
    const [Coin, setCoin] = useState("BTC");
    const [CoinSent, setCoinSent] = useState(false);
    const container = useRef();

    // HANDLING FORM SsUBMIT
    const handleSubmit = (e) => {
        e.preventDefault();

        const data = {
          id: Math.floor(Math.random() * 10000),
          amount: Amount,
          wallet: Wallet,
          coin: Coin
        }

        props.onAddData(data)

        setCoinSent(true);
    };
    //


    //END

    // ANIMATION

    useEffect(() => {
        gsap.fromTo(
            container.current,
            {
                scale: 0,
                opacity: 0,
            },
            {
                scale: 1,
                opacity: 1,
                duration: 0.3,
            }
        );
    }, []);

    return (
        <div
            className="newtransfer absolute bg-gray-600 h-4 w-4/4"
            ref={container}
        >
            <div className="heading">
                <h1 className="bold">New Transfer</h1>
            </div>
            <form className="form" onSubmit={handleSubmit}>
                <input
                    type="number"
                    name="amount"
                    className="input"
                    placeholder="Amount"
                    value={Amount}
                    onChange={(e) => setAmount(e.target.value)}
                />

                {/* <input type="text" name="text" className="input" placeholder="Coin"/> */}

                <input
                    type="text"
                    name="wallet"
                    className="input"
                    placeholder="Wallet Address"
                    value={Wallet}
                    onChange={(e) => setWallet(e.target.value)}
                />

                <select
                    name="coin"
                    id="coin"
                    value={Coin}
                    onChange={(e) => setCoin(e.target.value)}
                >
                    <option value="BTC">BTC</option>
                    <option value="ETH">ETH</option>
                    <option value="LTC">LTC</option>
                </select>

                <button type="submit">Send Coin</button>
                {/* <p>{Amount}{Wallet}</p> */}
            </form>
            {CoinSent ? (
                <Sent amount={Amount} coin={Coin} walleto={Wallet} />
            ) : null}
        </div>
    );
};

// export default Newtransfer;
