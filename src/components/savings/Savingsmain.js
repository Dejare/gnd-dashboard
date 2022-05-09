import React from "react";
import Leftcards from "../cardsComponent/Leftcards";
import SavingCards from "./SavingCards";
import "./savings.scss";
import { AiOutlineArrowLeft, Aifi, AiFillDollarCircle, AiOutlineArrowsAlt, AiOutlinePlusSquare} from "react-icons/ai";
import {FaTimes} from 'react-icons/fa'
import Savingcardtwo from "./Savingcardtwo";

const Savingsmain = () => {
    const today = new Date();
    console.log(today);
    const year = today.getFullYear();
    const month = today.getMonth() + 1;
    const day = today.getDate();

    return (
        <div className="savings_main">
            <div className="flex flex-row justify-between">
                <div>
                    <h1 className="m-8">Savings.</h1>
                </div>
                <div className="m-0">
                    <p className="m-8 mb-0 ">Showing For.</p>
                    <p className="m-8 mt-0 bold">
                        {day}/{month}/{year}
                    </p>
                </div>
            </div>
            <div className="functionBtns flex flex-row item-center m-auto bg-gray-100 rounded-xl shadow">
                <SavingCards text="Add Savings" img={<AiOutlinePlusSquare />} />
                <SavingCards
                    text="Withdraw Savings"
                    img={<AiOutlineArrowsAlt />}
                />
                <SavingCards text="New Target" img={<AiFillDollarCircle />} />
                <SavingCards text="Stop Savings" img={<FaTimes />} />
            </div>
            <div className="text">
                <h1 className="mt-4">
                    We've saved <span>$1200</span> <br /> Since you last checked
                </h1>
            </div>
            <div className="flex flex-row justify-around m-auto">
        <Savingcardtwo bg="#86dceb"  text="1200" target="Rent"/>
        <Savingcardtwo bg="#ffc0f4"   text="200" target="College Dues" num="2"/>

            </div>
        </div>
    );
};

export default Savingsmain;
