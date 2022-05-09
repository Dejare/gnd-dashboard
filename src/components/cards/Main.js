import React, {useState} from "react";
import "./cards.scss";
import SavingCards from "../savings/SavingCards";
import {
    AiOutlineArrowLeft,
    Aifi,
    AiFillDollarCircle,
    AiOutlineArrowsAlt,
    AiOutlinePlusSquare,
} from "react-icons/ai";
import { FaTimes } from "react-icons/fa";
import Creditcard from "./Creditcard";
import Transactions from "./Transactions";

const Main = () => {
    const [Deposits, setDeposits] = useState(false)
    const [Withdrawal, setWithdrawal] = useState(false)
    return (
        <div className="main">
            <div className="flex flex-row justify-between">
                <div>
                    <h1 className="m-8 text-4xl">Cards.</h1>
                </div>
                <div className="m-0">
                    <p className="m-8 mb-0 ">Showing For.</p>
                </div>
            </div>
            <div className="functionBtns flex flex-col item-center h-100 m-auto  item-center justify-center bg-gray-100 rounded-xl shadow">
                <SavingCards text="Add Card" img={<AiOutlinePlusSquare />}/>
                <SavingCards text="Get New Card" img={<AiFillDollarCircle />} />
                <SavingCards text="Stop Card" img={<FaTimes />} />
            </div>
            <Creditcard CardNum="0123456789101112919082" CardDate="03/26"/>
            {/* {
                Math.floor(Math.random()*10e19+1)
            }
            <br />
            {
                Math.floor(Math.random()*30)
            }/{Math.floor(Math.random()*90)} */}

            {/* <Creditcard CardNum="0123456789101112919082" CardDate="03/26"/> */}
            <h1 className="m-12 text-3xl">Card Transactions.</h1>
            <Transactions/>
        </div>
    );
};

export default Main;
