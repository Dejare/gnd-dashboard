import React from "react";
import "./savings.scss";
const Savingcardtwo = ({ bg, target, text, num }) => {
    return (
        <div
            className="savingCardBottom rounded-xl"
            style={{ backgroundColor: `${bg}` }}
        >
            <div className="heading">
                <div className="m-4">
                    <p className="bold">#{num} TARGET</p>
                    <p>{target}</p>
                </div>
                <hr className="w-2/4" />
                <div className="flex flex-row justify-between">
                    <div className="content m-8 m-auto ">
                      <h1 className="text-9xl">{text}</h1>
                      <p className="text-xl">of $2,400.00</p>
                    </div>
                    <div className="progress m-8">
                      <div className="mask progress">
                          <div className="fill"></div>
                      </div>
                    </div>
                </div>
     
            </div>
        </div>
    );
};

export default Savingcardtwo;
